import { FriendModel } from './friend.model';

export interface FriendDao {
  findAllFriendsForCurrentUser(userId: string): Promise<FriendModel[]>;
  findFriendById(id: string): Promise<FriendModel>;
  addFriendForCurrentUser(id: string, friend: FriendModel): Promise<FriendModel>;
  updateFriendById(id: string, friend: FriendModel);
  deleteFriendById(id: string);
}