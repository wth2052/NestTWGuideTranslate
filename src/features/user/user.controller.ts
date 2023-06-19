import { Controller, Delete, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

	constructor(
		private readonly userService: UserService
	) {}

	@Delete(':id')
	removeById(@Param('id') id: string) {
		return this.userService.removeById(id);
	}

}