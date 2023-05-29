import { Controller, Get, Param } from '@nestjs/common';

@Controller('todos')
export class TodoController {
  @Get(':id')
  get(@Param() params: { id: string }) {
    const { id } = params;
    return {
      id,
      title: `Title ${id}`,
      description: '',
    };
  }
}
