import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  @Post('/multiple')
  @UseInterceptors(FileInterceptor('files'))
  uploadSingleFile(@UploadedFiles() files: Express.Multer.File[]) {
    return files.map(({ fieldname, originalname }) => ({
      fieldname,
      originalname,
    }));
  }
}
