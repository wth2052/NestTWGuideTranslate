import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './features/todo/todo.controller';
import { TodoModule } from './features/todo/todo.module';
import { TodoService } from './features/todo/todo.service';
import { CopyTodoModule } from './features/copy-todo/copy-todo.module';
import { CopyTodoController } from './features/copy-todo/copy-todo.controller';
import { HandsomeModule } from './handsome/handsome.module';

@Module({
  imports: [TodoModule, CopyTodoModule, HandsomeModule],
  controllers: [AppController, TodoController, CopyTodoController],
  providers: [AppService, TodoService],
})
export class AppModule {}
