import { Injectable, NotFoundException, UnauthorizedException, ConflictException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../sequelize/models/user.model';
import { MailService } from '../mail/mail.service';
import { ConfigService } from '@nestjs/config';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
        private jwtService: JwtService,
        private configService: ConfigService,
        private mailService: MailService,
    ) { }

    // Erlaubte Email, also nur Schulkonten
    private readonly ALLOWED_EMAIL_DOMAIN = '@htl-donaustadt.at';

    private validateEmailDomain(email: string): void {
        if (!email.toLowerCase().endsWith(this.ALLOWED_EMAIL_DOMAIN)) {
            throw new BadRequestException(`Nur Schulverifizierte Nutzer sind erlaubt.`);
        }
    }

    // Neuen Benutzer registrieren
    async register(registerDto: RegisterDto) {
        const { firstName, lastName, email } = registerDto;

        // Prüfen ob die Email ein Schulkonto ist
        this.validateEmailDomain(email);

        // Prüfe ob User bereits existiert
        const existingUser = await this.userModel.findOne({ where: { email } });
        if (existingUser) {
            throw new ConflictException('Ein Benutzer mit dieser E-Mail existiert bereits.');
        }

        // Erstelle neuen User (ohne Passwort, da Magic Link)
        const user = await this.userModel.create({
            firstName,
            lastName,
            email,
            password: '', // Kein Passwort nötig bei Magic Link
            role: 'user',
        } as any);

        // Sende direkt einen Magic Link
        await this.sendMagicLink(email);

        return {
            message: 'Registrierung erfolgreich! Ein Login-Link wurde an deine E-Mail gesendet.',
            user: { email: user.email, firstName: user.firstName, lastName: user.lastName }
        };
    }

    // Benutzer anhand der ID finden
    async findById(userId: number) {
        const user = await this.userModel.findOne({ where: { user_id: userId } });
        if (!user) {
            throw new NotFoundException('Benutzer nicht gefunden.');
        }
        return user;
    }

    // 1. Login anfordern (Mail senden), erstellt User automatisch falls nicht vorhanden
    async sendMagicLink(email: string) {
        // Prüfe ob Email-Domain erlaubt ist
        this.validateEmailDomain(email);

        let user = await this.userModel.findOne({ where: { email } });

        // Falls User nicht existiert -> automatisch erstellen
        if (!user) {
            // Email-Adresse aufspalten für Vor-/Nachname
            const emailPrefix = email.split('@')[0];
            user = await this.userModel.create({
                firstName: emailPrefix,
                lastName: '',
                email,
                password: '',
                role: 'user',
            } as any);
        }

        const payload = { email: user.email, sub: user.user_id };
        // Token ist 15 Minuten gültig
        const token = this.jwtService.sign(payload, { expiresIn: '15m' });

        // Link zusammenbauen: http://localhost:8081/login/callback?token=...
        const frontendUrl = this.configService.get<string>('FRONTEND_URL');
        const link = `${frontendUrl}/login/callback?token=${token}`;

        // Mail versenden
        await this.mailService.sendMagicLink(user.email, link);

        return { message: 'Magic Link wurde per E-Mail gesendet!' };
    }

    // 2. Token prüfen (nach Klick auf Link)
    async verifyMagicLink(token: string) {
        try {
            const payload = this.jwtService.verify(token);
            const user = await this.userModel.findOne({ where: { email: payload.email } });

            if (!user) {
                throw new UnauthorizedException('User existiert nicht mehr.');
            }

            // "Echter" Session Token (1 Tag gültig)
            const sessionToken = this.jwtService.sign(
                { email: user.email, sub: user.user_id, role: user.role },
                { expiresIn: '1d' }
            );

            return {
                accessToken: sessionToken,
                user: { email: user.email, role: user.role }
            };
        } catch (error) {
            throw new UnauthorizedException('Ungültiger oder abgelaufener Link.');
        }
    }

}
