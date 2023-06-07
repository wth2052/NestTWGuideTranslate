import { Controller, Get, UseGuards } from '@nestjs/common';
import { Auth } from './decorators/auth/auth.decorator';
import { Roles } from './decorators/roles/roles.decorator';
import { User } from './decorators/user/user.decorator';
import { RoleGuard } from './guards/role/role.guard';

@Controller()
export class AppController {
  constructor() {}

  @Auth('staff')
  @Get()
  getHello(@User('name') name: string): string {
    return name;
  }
}