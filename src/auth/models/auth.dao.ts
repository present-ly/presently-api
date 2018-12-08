import { UserModel } from './../../user/models/user.model';
import { LoginCredentials, JwtPayload } from './auth.model';
export interface AuthDao {
  loginUser(credentials: LoginCredentials): Promise<string>;
  registerUser(user: UserModel): Promise<string>;
  confirmUser(email: string): void;
  forgotPassword(email: string): void;
  validateUser(payload: JwtPayload): void;
}
