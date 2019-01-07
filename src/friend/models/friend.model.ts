import {UserModel} from '../../user/models/user.model';
import {EventModel} from '../../event/models/event.model';

export interface FriendModel {
    id: string;
    profile: UserModel;
    events: EventModel[];
    interests: string[];
}