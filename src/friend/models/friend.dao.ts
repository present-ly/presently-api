import { FriendModel } from './friend.model';

export interface FriendDao {
  getFriends(id: string): Promise<FriendModel[]>;
  getFriend(id: string): Promise<FriendModel>;
  addFriend(id: string, friend: FriendModel): Promise<FriendModel>;
  editFriend(id: string, friend: FriendModel);
  deleteFriend(id: string);
}