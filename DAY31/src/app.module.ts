import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import mongoConfigFactory from './configs/mongo.config';
import secretConfigFactory from './configs/secret.config';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { ResponseInterceptor } from './core/interceptors/response';
import { UserModule } from './features/user';
import { AuthModule } from './features/auth';
import { TodoModule } from './features/todo/todo.module';
import { AuthorizationModule } from './core/guards/modules/authorization';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [mongoConfigFactory, secretConfigFactory],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: config.get<string>('mongo.uri'),
        //자신의 Mongoose 버전이 6 이상이라면, useFindAndModify 옵션을 지워주어야 오류가 없습니다.
        // Mongoose 6 이상에서는 디폴트로 해당 값을 지원합니다.
        // useFindAndModify: false,
      }),
    }),
    UserModule,
    AuthModule,
    TodoModule,
    AuthorizationModule.register({
      //윈도우 dirname 이슈, src 경로로 변경
      modelPath: join('src/rbac/model.conf'),
      policyAdapter: join('src/rbac/policy.csv'),
      global: true,
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
