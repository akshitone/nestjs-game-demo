import { Exclude } from 'class-transformer';
import { isNotEmpty, IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';

export class UserCreateDTO {
  @IsString()
  @IsNotEmpty()
  readonly firstName: string;

  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @IsString()
  @IsNotEmpty()
  readonly userName: string;

  @IsStrongPassword()
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  readonly dateOfBirth: string;
}

export class UserResponseDTO {
  readonly username: string;
}
