import {EventModel} from './event.model';
export interface EventDao {
  getEventByID(id: string): Promise<EventModel>;
  getEventsForCurrentUser(userId: string) Promise<EventModel[]>;
  getEventsForFriend(friendId: string) Promise<EventModel[]>;
  getUserByEventId(eventId: string) Promise<UserModel>;
}