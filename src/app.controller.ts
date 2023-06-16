import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  @Post('/multiple')
  @UseInterceptors(AnyFilesInterceptor())
  uploadMultipleFiles(@UploadedFiles() files: Express.Multer.File[]) {
    return files.map(({ fieldname, originalname }) => ({
      fieldname,
      originalname,
    }));
  }
}
