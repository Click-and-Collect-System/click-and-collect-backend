import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { AzureADStrategy } from './authentication/strategies/AzureADStrategy';
import { GreetingsModule } from './greetings/greetings.module';
import { AuthController } from './auth/auth.controller';
import { MenuModule } from './menu/menu.module';

// Datenbank-Verbindungsdaten hartkodiert (ersetzt die TypeORM-Konfiguration)
const PORT = 8080;
const NODE_ENV = 'development';
const DATABASE_URL = 'postgres://admin:admin123@localhost:5432/schulbuffet';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PassportModule.register({ defaultStrategy: 'AzureAD' }),
      /*
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin123',
      database: 'schulbuffet',
      autoLoadEntities: true,
      synchronize: true,


    }),*/
    GreetingsModule,
    MenuModule,

  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AzureADStrategy],
})
export class AppModule {
  static readonly PORT = PORT;
  static readonly NODE_ENV = NODE_ENV;
  static readonly DATABASE_URL = DATABASE_URL;
}
