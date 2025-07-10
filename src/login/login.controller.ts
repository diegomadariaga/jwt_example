import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from '../login/login.service';
import { LoginDto } from '../login/dto/login.dto';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async login(@Body() loginDto: LoginDto) {
    return this.loginService.login(loginDto);
  }
}
