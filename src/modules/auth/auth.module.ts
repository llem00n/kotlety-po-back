import { Module } from '@nestjs/common';
import { AuthService } from './providers/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { secret } from './secret';
import { DatabaseModule } from '../database/database.module';
import { UsersService } from '../database/providers/users/users.service';
import { AuthController } from './controllers/auth/auth.controller';

@Module({
  providers: [AuthService],
  imports: [
    DatabaseModule.forFeature(UsersService),
    JwtModule.register({
      global: true,
      secret: secret,
      signOptions: { expiresIn: '1 days' },
    }),
  ],
  controllers: [AuthController],
})
export class AuthModule {}
