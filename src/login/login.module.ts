import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { AuthUseCase } from './use-cases/auth.usecase';
import { JwtModule } from './jwt.module';

import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [JwtModule],
  controllers: [LoginController],
  providers: [LoginService, AuthUseCase, JwtService],
})
export class LoginModule {}
