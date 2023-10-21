import { Injectable } from '@nestjs/common';
import { CommonUtility } from '../../core/utils/common.utility';
import { UserService } from '../user';

@Injectable()
export class AuthService {

  constructor(private readonly userService: UserService) {}

  async validateUser(username: string, password: string) {
    const user = await this.userService.findUser({ username });
    const { hash } = CommonUtility.encryptBySalt(password, user?.password?.salt);
    if (!user || hash !== user?.password?.hash) {
      return null;
    }
    return user;
  }

}