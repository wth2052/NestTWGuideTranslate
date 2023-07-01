import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupSwagger(app);
  await app.listen(3000);
}

function setupSwagger(app: INestApplication) {
  const builder = new DocumentBuilder();
  const config = builder
    .setTitle('TodoList')
    .setDescription('This is a basic Swagger document.')
    .setVersion('1.0')
    .addOAuth2({
      type: 'oauth2',
      flows: {
        implicit: {
          authorizationUrl: '<AUTHORIZATION_URL>', // 인증 URL
          tokenUrl: '<TOKEN_URL>', // 인증용  토큰
          scopes: {
            // 權限選項
            read: 'read',
            write: 'write',
            update: 'update',
            delete: 'delete',
          },
        },
      },
    })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  const options: SwaggerCustomOptions = {
    explorer: true,
  };
  SwaggerModule.setup('api', app, document, options);
}

bootstrap();
