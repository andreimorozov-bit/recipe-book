import { Injectable } from '@nestjs/common';
import { SignInUserDto } from './dto/signin-user.dto';

@Injectable()
export class AuthService {
  printUser(signInUserDto: SignInUserDto): void {
    console.log(signInUserDto);
  }
}
