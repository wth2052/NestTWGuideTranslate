import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MulterHelper } from './core/helper/multer.helper';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: MulterHelper.destination,
        filename: MulterHelper.filenameHandler,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
