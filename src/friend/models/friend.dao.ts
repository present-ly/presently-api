import { UserModel } from 'src/user/models/user.model';

export interface FriendDao {
  findAllFriendsForCurrentUser(userId: string): Promise<UserModel[]>;
  findFriendById(id: string): Promise<UserModel>;
  addFriendForCurrentUser(id: string, friend: UserModel): Promise<UserModel>;
  updateFriendById(id: string, friend: UserModel);
  deleteFriendById(id: string);
}
