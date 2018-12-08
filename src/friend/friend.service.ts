import { Injectable } from '@nestjs/common';
import { FriendDao } from './models/friend.dao';
import { FriendModel } from './models/friend.model';

@Injectable()
export class FriendService implements FriendDao {
  activateFriend(id: string) {}

  async addFriendForCurrentUser(
    id: string,
    friend: FriendModel,
  ): Promise<FriendModel> {
    return undefined;
  }

  deleteFriendById(id: string) {}

  updateFriendById(id: string, friend: FriendModel) {}

  async findFriendById(id: string): Promise<FriendModel> {
    return undefined;
  }

  async findAllFriendsForCurrentUser(userId: string): Promise<FriendModel[]> {
    return [];
  }
}
