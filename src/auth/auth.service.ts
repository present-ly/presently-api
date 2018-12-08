import { UserService } from './../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { AuthDao } from './models/auth.dao';
import { Injectable } from '@nestjs/common';
import { UserModel } from 'src/user/models/user.model';
import { LoginCredentials, JwtPayload } from './models/auth.model';
import { hash, compare } from 'bcrypt';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AuthService implements AuthDao {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async loginUser(credentials: LoginCredentials): Promise<string> {
    const user: UserModel = await this.userService.findUserByEmail(
      credentials.email,
    );
    const passwordIsValid = await compare(credentials.password, user.password);
    if (passwordIsValid) {
      const payload: JwtPayload = { email: user.email, id: user.id };
      return this.jwtService.sign(payload);
    }
  }

  async registerUser(user: UserModel): Promise<string> {
    user.id = uuid();
    user.password = await hash(user.password, 10);
    await this.userService.createUser(user);
    return await 'register called';
  }
  confirmUser(email: string): void {}
  forgotPassword(email: string): void {}

  async validateUser(payload: JwtPayload): Promise<any> {
    return await this.userService.findUserById(payload.id);
  }
}
