import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('/todos')
  getTodos() {
    // return this.appService.getTodos();
  }

}