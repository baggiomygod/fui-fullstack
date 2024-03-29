import {Controller, Get, Param, UserGuards, HttpStatus, HttpCode, Controller, UseGuards} from '@nestjs/common';
import {AuthService} from './auth.service';
import {AuthGuard} from '@nestjs/passport';
import { callback } from './jwt.strategy'

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    @Get('login')
    @HttpCode(HttpStatus.OK)
    async login(@Param() params): Promise<any> {
        return this.authService.login('fui', 'dsadfbreigfyregyfjdsg');
    }
    @Get('checklogin')
    @UseGuards(AuthGuard)('jwt', {session: false, callback})
    public checkLogin() {
        return 'valid user:' + this.authService.getUser().name;
    }
}
