export interface UserModel {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  password?: string;
  profilePictureUrl?: string;
  confirmed: string;
  interests?: string[];
}
