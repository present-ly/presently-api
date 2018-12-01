import { Injectable } from '@nestjs/common';
import { FriendDao } from './models/friend.dao';
import { FriendModel } from './models/friend.model';

@Injectable()
export class FriendService implements FriendDao{
  activateFriend(id: string) {
  }

  async addFriend(id: string, friend: FriendModel): Promise<FriendModel> {
    return undefined;
  }

  deleteFriend(id: string) {
  }

  editFriend(id: string, friend: FriendModel) {
  }

  async getFriend(id: string): Promise<FriendModel> {
    return undefined;
  }

  async getFriends(id: string): Promise<FriendModel[]> {
    return [];
  }

}
