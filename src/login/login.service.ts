import { Injectable } from '@nestjs/common';
import { LoginDto } from '../login/dto/login.dto';
import { AuthUseCase } from './use-cases/auth.usecase';

@Injectable()
export class LoginService {
  constructor(private readonly authUseCase: AuthUseCase) {}

  async login(loginDto: LoginDto) {
    // Delegates authentication logic to the use case
    return this.authUseCase.execute(loginDto);
  }
}
