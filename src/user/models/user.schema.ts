import { UserModel } from './user.model';
import * as mongoose from 'mongoose';
export const UserSchema: UserModel = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  phoneNumber: String,
  confirmed: Boolean,
  profilePictureUrl: String,
  interests: Array,
});
