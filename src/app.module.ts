import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './features/todo/todo.controller';
import { TodoModule } from './features/todo/todo.module';
import { TodoService } from './features/todo/todo.service';
import { HandsomeModule } from './handsome/handsome.module';

@Module({
  imports: [TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
