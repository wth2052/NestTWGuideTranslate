import { Controller, Get } from '@nestjs/common';
import { ConfigurationService } from './common/configuration/configuration.service';

@Controller()
export class AppController {
  constructor(
    private readonly configService: ConfigurationService
  ) {
  }

  @Get()
  getHello() {
    return { username: this.configService.get('USERNAME') };
  }
}