import { UserModel } from './user.model';

export interface UserDao {
  findUserById(id: string): UserModel;
  updateUserById(id: string, user: UserModel);
  deleteUserById(id: string);
}
