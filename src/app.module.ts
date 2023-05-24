import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './modules/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConfig } from './datasource.config';
import { CitiesController } from './modules/cities/controllers/cities.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '/.env',
    }),
    TypeOrmModule.forRoot(getConfig()),
    AuthModule,
    DatabaseModule,
  ],
  controllers: [AppController, CitiesController],
  providers: [AppService],
})
export class AppModule {}
