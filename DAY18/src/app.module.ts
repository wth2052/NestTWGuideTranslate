import { Module, OnApplicationShutdown } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ]
})
export class AppModule implements OnApplicationShutdown {
  onApplicationShutdown(): void {
    console.log('[AppModule]: shutdown event!');
  }
}