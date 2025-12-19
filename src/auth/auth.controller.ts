import { Controller, Post, Body, Get, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { VerifyTokenDto } from './dto/verify-token.dto';
import { Public } from './public.decorator';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    // Registrierung - öffentlich zugänglich
    @Public()
    @Post('register')
    async register(@Body() registerDto: RegisterDto) {
        return this.authService.register(registerDto);
    }

    // Magic Link anfordern - öffentlich zugänglich
    @Public()
    @Post('login')
    async login(@Body() loginDto: LoginDto) {
        return this.authService.sendMagicLink(loginDto.email);
    }

    // Magic Link verifizieren - öffentlich zugänglich
    @Public()
    @Post('callback')
    async verify(@Body() verifyDto: VerifyTokenDto) {
        return this.authService.verifyMagicLink(verifyDto.token);
    }

    // Aktuellen Benutzer abrufen - geschützt
    @UseGuards(JwtAuthGuard)
    @Get('me')
    async getProfile(@Request() req) {
        return this.authService.findById(req.user.userId);
    }
}

