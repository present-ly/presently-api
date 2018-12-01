import { EventModel } from '../../event/models/event.model';

export interface FriendModel {
  firstName: string;
  lastName: string;
  email: string;
  profilePictureUrl?: string;
  events?: EventModel;
  interests?: string[];
  isActive: boolean;
}