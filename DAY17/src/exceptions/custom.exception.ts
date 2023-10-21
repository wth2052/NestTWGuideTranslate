import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomException extends HttpException {
	constructor () {
		super('알수없는 오류', HttpStatus.INTERNAL_SERVER_ERROR);
	}
}