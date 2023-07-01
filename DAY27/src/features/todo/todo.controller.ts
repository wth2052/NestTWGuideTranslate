import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiBody, ApiHeader, ApiOAuth2, ApiResponse, ApiTags } from '@nestjs/swagger';

import { TodoService } from './todo.service';

import { CreateTodoDto } from './dto/create-todo.dto';

// OAuth2 Auth
@ApiOAuth2(['write', 'read', 'update'])
@ApiTags('Todo')
@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The todo has been successfully created.',
  })
  @Post()
  createTodo(@Body() data: CreateTodoDto) {
    return this.todoService.createTodo(data);
  }

  @ApiBody({ type: [CreateTodoDto] })
  @Post('bulk')
  createTodos(@Body() todos: CreateTodoDto[]) {
    return todos.map((todo) => this.todoService.createTodo(todo));
  }

  @ApiHeader({
    name: 'X-Custom',
    description: 'Try to set custom header.',
  })
  @Get(':id')
  getTodo(@Param('id') id: string) {
    return this.todoService.getTodo(id);
  }
}