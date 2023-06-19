import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { User, UserDocument } from '../../common/models/user.model';

@Injectable()
export class UserService {

	constructor(
		@InjectModel(User.name) private readonly userModel: Model<UserDocument>
	) {}

	updateById(id: string, data: any) {
		return this.userModel.findByIdAndUpdate(id, data, { new: true });
	}

}