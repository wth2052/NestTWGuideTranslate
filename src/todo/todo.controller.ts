import { Controller, Patch, HttpCode, HttpStatus } from '@nestjs/common';

@Controller('todos')
export class TodoController {
  @Patch()
  @HttpCode(HttpStatus.NO_CONTENT)
  get() {
    return [];
  }
}