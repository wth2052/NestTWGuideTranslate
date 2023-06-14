import { Module, OnApplicationShutdown } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {StorageModule} from './common/storage/storage.module';

@Module({
  imports: [
    StorageModule
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