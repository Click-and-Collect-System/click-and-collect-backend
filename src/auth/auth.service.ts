import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../sequelize/models/user.model';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
        private jwtService: JwtService,
        private configService: ConfigService,
    ) {}

    // 1. Login anfordern (Mail senden)
    async sendMagicLink(email: string) {
        const user = await this.userModel.findOne({ where: { email } });

        // Falls User nicht existiert -> Fehler (oder optional registrieren)
        if (!user) {
            throw new NotFoundException('Benutzer nicht gefunden. Bitte registrieren.');
        }

        const payload = { email: user.email, sub: user.user_id };
        // Token ist 15 Minuten gültig
        const token = this.jwtService.sign(payload, { expiresIn: '15m' });

        // Link zusammenbauen: http://localhost:8081/login/callback?token=...
        const frontendUrl = this.configService.get<string>('FRONTEND_URL');
        const link = `${frontendUrl}/login/callback?token=${token}`;

        // Mail versenden
        await this.sendEmail(user.email, link);

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

    private async sendEmail(email: string, link: string) {
        const transporter = nodemailer.createTransport({
            host: this.configService.get<string>('MAIL_HOST'),
            port: this.configService.get<number>('MAIL_PORT'),
            secure: false, // true für 465, false für andere Ports
            auth: {
                user: this.configService.get<string>('MAIL_USER'),
                pass: this.configService.get<string>('MAIL_PASS'),
            },
        });

        await transporter.sendMail({
            from: this.configService.get<string>('MAIL_FROM'),
            to: email,
            subject: 'Dein Login Link für das Schulbuffet',
            html: `
        <h3>Willkommen zurück!</h3>
        <p>Klicke auf den Link, um dich anzumelden:</p>
        <p><a href="${link}">Jetzt einloggen</a></p>
        <p>Der Link ist 15 Minuten gültig.</p>
      `,
        });
    }
}