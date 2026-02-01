import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { MenuModule } from './menu/menu.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    //Config laden (damit .env funktioniert)
    ConfigModule.forRoot({ isGlobal: true }),

    //Datenbank Verbindung aufbauen
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        dialect: 'postgres',
        uri: configService.get<string>('DATABASE_URL'),
        autoLoadModels: true,
        synchronize: true,
      }),
    }),

    //Feature-Module
    MenuModule,
    AuthModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }