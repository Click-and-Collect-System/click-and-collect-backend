import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import * as jwksRsa from 'jwks-rsa';
import { ConfigService } from '@nestjs/config';
import { UnauthorizedException } from '@nestjs/common';


@Injectable()
export class AzureADStrategy extends PassportStrategy(Strategy, 'AzureAD') {
    constructor(protected readonly configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            audience: configService.get('AZURE_AD_AUDIENCE'),
            issuer: `https://sts.windows.net/${configService.get('AZURE_AD_TENANTID')}/`,
            algorithms: ['RS256'],
            ignoreExpiration: true,
            secretOrKeyProvider: jwksRsa.passportJwtSecret({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: `https://login.microsoftonline.com/${configService.get('AZURE_AD_TENANTID')}/discovery/v2.0/keys`,
            }),
            //vllt falsch
            async validate(payload: any) {
                if (payload.aud !== process.env.AZURE_CLIENT_ID) {
                    throw new UnauthorizedException('Invalid Client ID');
                }

                if (payload.oid !== process.env.AZURE_OBJECT_ID) {
                    throw new UnauthorizedException('Invalid Object ID');
                }

                return payload;
            }});

    }

    validate(payload: any) {
        return payload;
    }
}