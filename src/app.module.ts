import { Module } from '@nestjs/common';

import { join } from 'path';

import { AuthorizationModule } from './common/authorization/authorization.module';

import { TodoModule } from './features/todo/todo.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AuthorizationModule.register({
      modelPath: join(__dirname, '../casbin/model.conf'),
      policyAdapter: join(__dirname, '../casbin/policy.csv'),
      global: true,
    }),
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
