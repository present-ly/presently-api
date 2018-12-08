import { UserModel } from './user.model';

export interface UserDao {
  findUserById(id: string): Promise<UserModel> | UserModel;
  findUserByEmail(email: string): Promise<UserModel>;
  updateUserById(id: string, user: UserModel);
  deleteUserById(id: string);
}
