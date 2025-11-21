import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';      // Import ConfigModule (optional, für Umgebungsvariablen)
import { SequelizeModule } from '@nestjs/sequelize'; // Import SequelizeModule
import { User } from './sequelize/models/user.model'; 

// Datenbank-Verbindungsdaten hartkodiert (ersetzt die TypeORM-Konfiguration)
const PORT = 8080;
const NODE_ENV = 'development';
const DATABASE_URL = 'postgres://admin:admin123@localhost:5432/schulbuffet';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot({
      uri: DATABASE_URL,        // Komplette Verbindungs-URI für PostgreSQL
      dialect: 'postgres',      // Sequelize-Dialect
      models: [User],               // Hier Deine Sequelize-Modelle eintragen
      logging: true,            // Optional, wie bei TypeORM aktiviert
      // synchronize gibt es bei Sequelize nicht, Migrations werden empfohlen
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static readonly PORT = PORT;
  static readonly NODE_ENV = NODE_ENV;
  static readonly DATABASE_URL = DATABASE_URL;
}
