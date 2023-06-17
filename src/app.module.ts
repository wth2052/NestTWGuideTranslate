import { HttpModule } from '@nestjs/axios';
import {  Module } from '@nestjs/common';
import { Agent } from 'https';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule, ConfigService} from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        httpsAgent: new Agent({ rejectUnauthorized: false }),
        timeout: config.get('HTTP_TIMEOUT')
      }),
      inject: [
        ConfigService
      ]
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}