import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService
  ) {
    this.appService.addBookToStorage({ name: 'Nest Tutorial' });
    this.appService.addBookToBookStorage({ name: 'Angular Tutorial' });
    console.log(`AppController: ${Math.random()}`);
  }

  @Get('/compare')
  getCompare() {
    return {
      storage: this.appService.getStorageList(),
      books: this.appService.getBookList()
    };
  }

}