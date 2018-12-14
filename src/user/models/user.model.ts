import { EventModel } from 'src/event/models/event.model';

export interface UserModel {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  password?: string;
  profilePictureUrl?: string;
  isActive: boolean;
  events: EventModel[];
  confirmed?: string;
  interests?: string[];
  friends?: string[];
}
