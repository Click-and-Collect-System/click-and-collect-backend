import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailService {
    private transporter;

    constructor(private configService: ConfigService) {
        this.transporter = nodemailer.createTransport({
            host: this.configService.get<string>('MAIL_HOST'),
            port: this.configService.get<number>('MAIL_PORT'),
            secure: false, // true for 465, false for other ports
            auth: {
                user: this.configService.get<string>('MAIL_USER'),
                pass: this.configService.get<string>('MAIL_PASS'),
            },
        });
    }

    async sendMagicLink(email: string, link: string) {
        await this.transporter.sendMail({
            from: this.configService.get<string>('MAIL_FROM'),
            to: email,
            subject: 'Dein Login Link für das Schulbuffet',
            html: `
        <h3>Willkommen zurück!</h3>
        <p>Klicke auf den Link, um dich anzumelden:</p>
        <p><a href="${link}">Jetzt einloggen</a></p>
        <p>Der Link ist 15 Minuten gültig.</p>
        <p>Falls du diese Anfrage nicht gestellt hast, kannst du diese E-Mail ignorieren.</p>
      `,
        });
    }
}
