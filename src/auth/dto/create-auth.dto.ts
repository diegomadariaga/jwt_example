import { IsString, MaxLength } from 'class-validator';

export class LoginAuthDto {
  @IsString()
  @MaxLength(64)
  username: string;

  @IsString()
  @MaxLength(64)
  password: string;
}
