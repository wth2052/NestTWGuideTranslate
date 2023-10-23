import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { RoleGuard } from 'src/common/guards/role/role.guard';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @UseGuards(RoleGuard)
  @Get(':id')
  getTodo(@Param('id') id: string) {
    return this.todoService.findById(id);
  }

  @UseGuards(RoleGuard)
  @Patch(':id')
  updateTodo(@Param('id') id: string, @Body() body: any) {
    return this.todoService.updateById(id, body);
  }

  @UseGuards(RoleGuard)
  @Delete(':id')
  removeTodo(@Param('id') id: string) {
    this.todoService.removeById(id);
    return this.todoService.todos;
  }
}
