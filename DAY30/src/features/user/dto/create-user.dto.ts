import { IsEmail, IsEnum, MaxLength, MinLength } from 'class-validator';
import {
  USER_PASSWORD_MAX_LEN,
  USER_PASSWORD_MIN_LEN,
  USER_USERNAME_MAX_LEN,
  USER_USERNAME_MIN_LEN,
} from '../../../common/constants/user.const';
import { Role } from '../../../common/enums/role.enum';

export class CreateUserDto {
  @MinLength(USER_USERNAME_MIN_LEN)
  @MaxLength(USER_USERNAME_MAX_LEN)
  public readonly username: string;

  @MinLength(USER_PASSWORD_MIN_LEN)
  @MaxLength(USER_PASSWORD_MAX_LEN)
  public readonly password: string;

  @IsEmail()
  public readonly email: string;

  @IsEnum(Role)
  public readonly role: Role;
}