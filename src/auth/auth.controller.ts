import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    @Post('verify')
    verifyToken(@Body() body: any) {
        const token = body.token;

        try {
            const payload = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
            const email = payload.email || payload.upn || '';


            if (email.endsWith('@htl-donaustadt.at')) {
                return { authorized: true, email };
            } else {
                return { authorized: false, reason: 'Dies ist kein Schulverifizierter Account' };
            }
        } catch (err) {
            return { authorized: false, reason: 'Falsches Tokenformat' };
        }
    }
}
