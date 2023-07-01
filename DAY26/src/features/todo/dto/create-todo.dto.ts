import { ApiProperty } from '@nestjs/swagger';
import { TodoPriority } from '../types/priority.type';

export class CreateTodoDto {
  @ApiProperty({
    maxLength: 20,
    description: 'Todo의 제목',
  })
  title: string;

  @ApiProperty({
    maxLength: 200,
    description: 'Todo의 설명',
  })
  description: string;

  @ApiProperty({
    description: 'Todo를 완성 했는지 여부',
  })
  completed: boolean;

  @ApiProperty({
    type: [String],
    description: 'Todo의 태그 목록',
  })
  tags: string[];

  @ApiProperty({
    enum: TodoPriority,
    enumName: 'TodoPriority', // Swagger에게 Schema를 만들라고 지정
    description: 'Todo의 우선순위',
  })
  priority: TodoPriority;
  //2차원 배열
  @ApiProperty({
    type: 'array',
    items: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
  })
  something: string[][];
}
