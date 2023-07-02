import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TodoDefinition } from '../../common/models/todo.model';

import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  imports: [MongooseModule.forFeature([TodoDefinition])],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
