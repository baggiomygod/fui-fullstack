import {ExteactJwt, Strategy} from 'passport-jwt';
import {AuthService} from './auth.service';
import {PassportStrategy} from '@nestjs/passport';
import {Injectable, UnauthorizedException} from '@nestjs/common';
import {JwtPayload} from './jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService){
        super({
            jwtFromRequest: ExteactJwt.fromAuthHeaderAsBearerToken(),
            passReqToCallback: true,
            secretOrKey: 'secretKey',
        });
    }
    async validate(payload: JwtPayload, done: (arg: any, user: any) => void) {
        const user = await this.authService.validateUser(payload.userName);
        if (!user) {
            return done(new UnauthorizedException(), false);
        }
        done(null, user);
    }
}

export const callback = (err, user, info) => {
    let message;
    if (err) {
        throw err;
    } else if (typeof info !== 'undefined' || !user) {
        switch (info.message) {
            case 'No auth token':
            case 'invalid signature':
            case 'jwt malformed':
            case 'invalid token':
            case 'invalid signature':
                message = 'You must provide a valid authenticated access token';
                break;
            case 'jwt expired':
                message = 'Your session has expired';
                break;
            default:
                message = info.message;
                break;
        }
        throw new UnauthorizedException(message);
    }
    return user;
};