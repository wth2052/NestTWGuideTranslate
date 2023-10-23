import { Module } from '@nestjs/common';

import { join } from 'path';

import { AuthorizationModule } from './common/authorization/authorization.module';

import { TodoModule } from './features/todo/todo.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AuthorizationModule.register({
      //윈도우 dirname 이슈, src 경로로 변경
      modelPath: join('src/casbin/model.conf'),
      policyAdapter: join('src/casbin/policy.csv'),
      global: true,
    }),
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
