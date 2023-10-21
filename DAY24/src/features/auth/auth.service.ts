import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { CommonUtility } from '../../core/utils/common.utility';
import { UserDocument } from '../../common/models/user.model';
import { UserService } from '../user';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.userService.findUser({ username });
    const { hash } = CommonUtility.encryptBySalt(
      password,
      user?.password?.salt,
    );
    if (!user || hash !== user?.password?.hash) {
      return null;
    }
    return user;
  }

  generateJwt(user: UserDocument) {
    const { _id: id, username } = user;
    const payload = { id, username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
