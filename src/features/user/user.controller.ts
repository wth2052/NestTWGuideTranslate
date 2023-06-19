import { Body, Controller, Param, Patch } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

	constructor(
		private readonly userService: UserService
	) {}

	@Patch(':id')
	updateById(
		@Param('id') id: string,
		@Body() body: any
	) {
		return this.userService.updateById(id, body);
	}

}