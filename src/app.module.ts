import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GreetingsModule } from './greetings/greetings.module';
import { AuthModule } from './auth/auth.module';
import { MenuModule } from './menu/menu.module';
import { SequelizeModule } from '@nestjs/sequelize'; // WICHTIG: Importieren

@Module({
  imports: [
    // 1. Config laden (damit .env funktioniert)
    ConfigModule.forRoot({ isGlobal: true }),

    // 2. Datenbank Verbindung aufbauen
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        dialect: 'postgres',
        // Hier wird deine DATABASE_URL aus der .env Datei verwendet:
        uri: configService.get<string>('DATABASE_URL'),
        autoLoadModels: true, // Lädt automatisch Models (wie User)
        synchronize: true,    // Erstellt Tabellen automatisch (nur für Dev!)
      }),
    }),

    // 3. Deine Feature-Module
    GreetingsModule,
    MenuModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }