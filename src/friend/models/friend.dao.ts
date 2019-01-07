import { UserModel } from 'src/user/models/user.model';
import {FriendModel} from './friend.model';

export interface FriendDao {
  findAllFriendsForCurrentUser(userId: string): Promise<FriendModel[]>;
  findFriendById(id: string): Promise<FriendModel>;
  addFriendForCurrentUser(id: string, friend: UserModel): Promise<FriendModel>;
  updateFriendById(id: string, friend: FriendModel);
  deleteFriendById(id: string);
}
