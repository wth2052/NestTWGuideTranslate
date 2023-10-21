import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TodoController } from "./features/todo/todo.controller";
import { TodoModule } from "./features/todo/todo.module";
import { TodoService } from "./features/todo/todo.service";


@Module({
  imports: [TodoModule],
  controllers: [AppController, TodoController],
  providers: [AppService, TodoService],
})
export class AppModule {
}
