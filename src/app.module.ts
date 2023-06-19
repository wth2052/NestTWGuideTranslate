import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const MONGO = {
  username: '<Example>',
  password: encodeURIComponent('<YOUR_PASSWORD>'),
  getUrl: function () {
    return `mongodb+srv://${this.username}:${this.password}@<YOUR_DB>`
  }
};

@Module({
  imports: [
    MongooseModule.forRoot(MONGO.getUrl())
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}