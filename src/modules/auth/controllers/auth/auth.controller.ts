import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from '../../providers/auth/auth.service';
import { AuthLoginDto } from './dto/login.dto';
import { AuthGuard } from '../../providers/guard/auth.guard';
import { User } from 'src/models/user.model';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService
  ) { }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() body: AuthLoginDto) {
    return this.authService.signIn(body.email, body.password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return {
      email: req.user.username
    }
  }
}
