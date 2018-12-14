import { Module } from '@nestjs/common';
import { FriendController } from './friend.controller';
import { FriendService } from './friend.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/user/models/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [FriendController],
  providers: [FriendService],
})
export class FriendModule {}
