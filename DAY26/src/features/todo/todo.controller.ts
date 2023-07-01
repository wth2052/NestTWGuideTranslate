import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';

import { TodoService } from './todo.service';

import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  createTodo(@Body() data: CreateTodoDto) {
    return this.todoService.createTodo(data);
  }

  // 다중 업로드
  @ApiBody({ type: [CreateTodoDto] })
  @Post('bulk')
  createTodos(@Body() todos: CreateTodoDto[]) {
    return todos.map((todo) => this.todoService.createTodo(todo));
  }

  @Get(':id')
  getTodo(@Param('id') id: string) {
    return this.todoService.getTodo(id);
  }
}