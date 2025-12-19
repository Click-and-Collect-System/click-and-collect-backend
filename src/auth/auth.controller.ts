import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    async login(@Body('email') email: string) {
        return this.authService.sendMagicLink(email);
    }

    @Post('callback')
    async verify(@Body('token') token: string) {
        return this.authService.verifyMagicLink(token);
    }
}