import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { AzureADStrategy } from './authentication/strategies/AzureADStrategy';
import { GreetingsModule } from './greetings/greetings.module';
import { AuthController } from './auth/auth.controller';



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


  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AzureADStrategy],
})
export class AppModule {}
