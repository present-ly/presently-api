import { UserModel } from 'src/user/models/user.model';
import { LoginCredentials, JwtPayload } from './models/auth.model';
import { AuthService } from './auth.service';
import { AuthDao } from './models/auth.dao';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController implements AuthDao {
  constructor(private readonly authService: AuthService) {}
  @Post('/login')
  loginUser(@Body() credentials: LoginCredentials): Promise<string> {
    return this.authService.loginUser(credentials);
  }
  @Post('/register')
  registerUser(@Body() user: UserModel): Promise<string> {
    return this.authService.registerUser(user);
  }
  @Post()
  confirmUser(email: string): void {
    return this.authService.confirmUser(email);
  }
  @Post()
  forgotPassword(email: string): void {
    this.authService.forgotPassword(email);
  }
  @Post()
  validateUser(payload: JwtPayload): void {
    this.authService.validateUser(payload);
  }
}
