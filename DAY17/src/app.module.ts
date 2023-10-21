import { Module, Scope } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StorageModule } from './common/storage/storage.module';
import { BookModule } from './common/book/book.module';

@Module({
  imports: [StorageModule, BookModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'USERNAME',
      useValue: 'WOO',
      scope: Scope.REQUEST, // scope 속성 추가
    },
  ],
})
export class AppModule {}
