import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { FriendDao } from './models/friend.dao';
import { FriendModel } from './models/friend.model';
import { FriendService } from './friend.service';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@Controller('user/:userId/friend')
export class FriendController implements FriendDao{
  constructor(private friendService: FriendService){}

@Post()
@ApiBearerAuth()
@ApiOperation({title: 'Create Friend for the Current User', description: 'Takes the UserId and creates a new friend for them'})
  async addFriendForCurrentUser(@Param('userId')id: string, @Body()friend: FriendModel): Promise<FriendModel> {
    return this.friendService.addFriend(id, friend);
  }

@Delete(':id')
@ApiBearerAuth()
@ApiOperation({title: 'Delete Friend', description: 'Deletes the friend with the associated ID'})
deleteFriendById(@Param('id')id: string) {
    this.friendService.deleteFriend(id);
  }

@Patch(':id')
@ApiBearerAuth()
@ApiOperation({title: 'Edit Friend', description: 'Takes an ID and a Friend object with the changed information and updates the friend.'})
updateFriendById(@Param('id')id: string, @Body()friend: FriendModel) {
    this.friendService.editFriend(id, friend);
  }

@Get(':id')
@ApiBearerAuth()
@ApiOperation({title: 'Get Friend', description: 'Returns a single friend'})
  async findFriendById(@Param('id')id: string): Promise<FriendModel> {
    return this.friendService.getFriend(id);
  }

@Get()
@ApiBearerAuth()
@ApiOperation({title: 'Get Friends', description: 'Returns all of the current users friends'})
  async findAllFriendsForCurrentUser(@Param('userId')id: string): Promise<FriendModel[]> {
    return this.friendService.getFriends(id);
  }
}
