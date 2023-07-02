import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDefinition } from '../../common/models/user.model';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';

@Module({
  imports: [MongooseModule.forFeature([UserDefinition])],
  providers: [UserService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
