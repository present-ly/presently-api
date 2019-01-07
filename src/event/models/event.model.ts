import { UserModel } from '../../user/models/user.model';
import { FriendModel } from '../../friend/models/friend.model';

export interface EventModel {
  eventFor: UserModel;
  eventOwnedBy: UserModel;
  name: string;
  date: number;
}