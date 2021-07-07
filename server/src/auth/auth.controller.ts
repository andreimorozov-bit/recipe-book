import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInUserDto } from './dto/signin-user.dto';
import { SignUpUserDto } from './dto/signup-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  signIn(@Body() signInUserDto: SignInUserDto) {
    this.authService.printUser(signInUserDto);
    return;
  }

  @Post('signup')
  signUp(@Body() signUpUserDto: SignUpUserDto) {
    this.authService.printUser(signUpUserDto);
  }
}
