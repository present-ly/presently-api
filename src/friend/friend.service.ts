import { Injectable } from '@nestjs/common';
import { FriendDao } from './models/friend.dao';
import { UserModel } from 'src/user/models/user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class FriendService implements FriendDao {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserModel>,
  ) {}

  async addFriendForCurrentUser(
    id: string,
    friend: UserModel,
  ): Promise<UserModel> {
    const currentUser = await this.userModel.findById(id);
    const doesFriendExist = await this.checkIfFriendExists(friend.email);
    if (doesFriendExist) {
      currentUser.friends.push(doesFriendExist.id);
    } else {
      friend.isActive = false;
      const newFriend = new this.userModel(friend);
      await newFriend.save();
      // TODO check that friend got saved properly instead of assuming it has.
      await currentUser.friends.push(newFriend.id);
      await currentUser.save();
      return newFriend;
    }
  }

  deleteFriendById(id: string) {}

  updateFriendById(id: string, friend: UserModel) {}

  async findFriendById(id: string): Promise<UserModel> {
    return this.userModel.findById(id);
  }

  async findAllFriendsForCurrentUser(userId: string): Promise<UserModel[]> {
    const currentUser = await this.userModel.findById(userId);
    const friendList: UserModel[] = [];
    if (currentUser.friends) {
      for (const friendId of currentUser.friends) {
        const friend = await this.userModel.findById(friendId);
        friendList.push(friend);
      }
    }
    return friendList;
  }

  async checkIfFriendExists(email: string): Promise<UserModel> {
    const userToCheck = await this.userModel.findOne({ email });
    if (userToCheck) {
      if (userToCheck.active) {
        return userToCheck;
      } else {
        return null;
      }
    }
    // TODO throw error in case we can't find the user.
  }
}
