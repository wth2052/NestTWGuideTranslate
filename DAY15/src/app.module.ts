import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from './common/configuration/configuration.module';

@Module({
  imports: [
    ConfigurationModule.forRoot({
      path: `../${process.env.NODE_ENV || 'development'}.env`
    })
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ]
})
export class AppModule {
}