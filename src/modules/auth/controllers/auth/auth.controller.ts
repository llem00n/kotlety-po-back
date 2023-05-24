import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from '../../providers/auth/auth.service';
import { AuthLoginDto } from './dto/login.dto';
import { AuthGuard } from '../../providers/guard/auth.guard';
import { User } from 'src/models/user.model';
import { AuthSignUpDto } from './dto/signup.dto';
import { UsersService } from 'src/modules/database/providers/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService, 
    private usersService: UsersService,
  ) { }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() body: AuthLoginDto) {
    return this.authService.signIn(body.email, body.password);
  }

  @Post('signup')
  async signUp(@Body() body: AuthSignUpDto){
    await this.usersService.addUser(body)
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return {
      email: req.user.username
    }
  }
}
