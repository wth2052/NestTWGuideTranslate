import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly configService: ConfigService
  ) {
  }

  @Get()
  getHello() {
    const app_domain = this.configService.get('APP_DOMAIN');
    const redirect_url = this.configService.get('APP_REDIRECT_URL');
    return { app_domain, redirect_url };
  }
}