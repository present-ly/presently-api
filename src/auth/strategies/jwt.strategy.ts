import { JwtPayload } from '../models/auth.model';
import { AuthService } from '../auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey:
        'EHqYCj6j30r$V9HFgM$8!9yKB6LKmyc8$Sno*h3@ttA1PfE@abN1NhF4SIRrAF3o',
    });
  }

  async validate(payload: JwtPayload) {
    console.log(payload);
    const user = await this.authService.validateUser(payload);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
