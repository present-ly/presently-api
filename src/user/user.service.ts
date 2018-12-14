import { UserDao } from './models/user.dao';
import { Model, ObjectId } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserModel } from './models/user.model';

@Injectable()
export class UserService implements UserDao {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserModel>,
  ) {}
  async createUser(user: UserModel) {
    const doesUserExist = await this.userModel.findOne({ email: user.email });
    if (!doesUserExist) {
      const newUser = new this.userModel(user);
      newUser.isActive = true;
      return await newUser.save();
    } else {
      doesUserExist.isActive = true;
      return doesUserExist;
    }
  }
  async findUserById(id: string): Promise<UserModel> {
    return await this.userModel.findById(id);
  }
  async findUserByEmail(email: string): Promise<UserModel> {
    return await this.userModel.findOne({ email });
  }
  updateUserById(id: string, user: UserModel) {}
  deleteUserById(id: string) {}
}
