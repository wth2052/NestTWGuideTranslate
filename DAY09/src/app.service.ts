import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getUser(id: number) {
    const users = [
      {
        id: 1,
        name: 'WOO'
      }
    ];
    const user = users.find(x => x.id === id);
    return user || {};
  }
}