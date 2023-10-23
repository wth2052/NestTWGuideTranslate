import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {

  private todos: { id: number, title: string, description: string }[] = [
    {
      id: 1,
      title: 'Title 1',
      description: ''
    }
  ];

  getTodos(): { id: number, title: string, description: string }[] {
    return this.todos;
  }

  createTodo(item: { id: number, title: string, description: string }) {
    //얘는 잘 늘고 있는데..?
    console.log(this.todos);
    this.todos.push(item);
  }

}