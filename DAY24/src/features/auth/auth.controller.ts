import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { Request } from 'express';

import { UserDocument } from '../../common/models/user.model';
import { CreateUserDto, UserService } from '../user';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('/signup')
  signup(@Body() user: CreateUserDto) {
    return this.userService.createUser(user);
  }

  @UseGuards(AuthGuard('local'))
  @Post('/signin')
  signin(@Req() request: Request) {
    return this.authService.generateJwt(request.user as UserDocument);
  }
}
