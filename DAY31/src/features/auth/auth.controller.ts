import {
  Body,
  Controller,
  ForbiddenException,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, UserService } from '../user';
import { LocalAuthGuard } from '../../core/guards/local-auth/local-auth.guard';
import { UserPayload } from './interfaces/payload.interface';
import { User } from './decorators/payload.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('/signup')
  async signup(@Body() dto: CreateUserDto) {
    const hasUser = await this.userService.hasUser();
    if (hasUser) {
      throw new ForbiddenException();
    }
    const user = await this.userService.createUser(dto);
    const { _id: id, username, role } = user;
    return this.authService.generateJwt({ id, username, role });
  }

  @UseGuards(LocalAuthGuard)
  @Post('/signin')
  signin(@User() user: UserPayload) {
    return this.authService.generateJwt(user);
  }
}
