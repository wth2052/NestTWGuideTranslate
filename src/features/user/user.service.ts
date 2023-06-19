import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { User, UserDocument } from '../../common/models/user.model';

@Injectable()
export class UserService {

	constructor(
		@InjectModel(User.name) private readonly userModel: Model<UserDocument>
	) {}

	removeById(id: string) {
		return this.userModel.findOneAndRemove({ _id: id });
	}

}