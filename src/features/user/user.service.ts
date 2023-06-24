import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { FilterQuery, Model } from 'mongoose';

import { CommonUtility } from '../../core/utils/common.utility';
import { UserDocument, USER_MODEL_TOKEN } from '../../common/models/user.model';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(USER_MODEL_TOKEN)
    private readonly userModel: Model<UserDocument>,
  ) {}

  createUser(user: CreateUserDto) {
    const { username, email } = user;
    const password = CommonUtility.encryptBySalt(user.password);
    return this.userModel.create({
      username,
      email,
      password,
    });
  }

  findUser(filter: FilterQuery<UserDocument>) {
    return this.userModel.findOne(filter).exec();
  }
}