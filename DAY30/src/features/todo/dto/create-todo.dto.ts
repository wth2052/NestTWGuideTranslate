import { IsOptional, MaxLength, MinLength } from 'class-validator';
import {
  TODO_DESCRIPTION_MAX_LEN,
  TODO_TITLE_MAX_LEN,
  TODO_TITLE_MIN_LEN,
} from '../../../common/constants/todo.const';

export class CreateTodoDto {
  @MinLength(TODO_TITLE_MIN_LEN)
  @MaxLength(TODO_TITLE_MAX_LEN)
  public readonly title: string;

  @IsOptional()
  @MaxLength(TODO_DESCRIPTION_MAX_LEN)
  public readonly description?: string;

  @IsOptional()
  public readonly completed?: boolean;
}