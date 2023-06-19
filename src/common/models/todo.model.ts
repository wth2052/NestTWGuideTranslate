import { Prop, Schema } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from './user.model';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {

	@Prop({ required: true, maxlength: 20 })
	title: string;

	@Prop({ maxlength: 200 })
	description: string;

	@Prop({ required: true })
	completed: boolean;

	@Prop({ type: Types.ObjectId, ref: 'User' })
	owner: User;

}