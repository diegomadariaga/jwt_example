import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '../dto/login.dto';

@Injectable()
export class AuthUseCase {
  constructor(private readonly jwtService: JwtService) {}

  async execute(loginDto: LoginDto): Promise<{ accessToken: string }> {
    const validUser = process.env.LOGIN_USER || 'admin';
    const validPass = process.env.LOGIN_PASS || 'admin';
    if (loginDto.username === validUser && loginDto.password === validPass) {
      const payload = { user: loginDto.username, pass: validPass };
      const accessToken = this.jwtService.sign(payload);
      return { accessToken };
    }
    throw new UnauthorizedException('Invalid credentials');
  }
}
