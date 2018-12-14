import { UserModel } from './user.model';
import * as mongoose from 'mongoose';
export const UserSchema: UserModel = new mongoose.Schema({
  uuid: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  phoneNumber: String,
  confirmed: String,
  isActive: Boolean,
  profilePictureUrl: String,
  interests: Array,
  friends: Array,
});
