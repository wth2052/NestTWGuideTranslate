import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Agent } from 'https';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Todo } from './common/models/todo.model';
@Injectable()
export class AppService {

  constructor(
    private readonly http: HttpService
  ) {}

  getTodos(): Observable<Todo> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos').pipe(
      map((res) => res.data)
    );
  }

}