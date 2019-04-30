import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {JwtPayload} from './jwt-payload.interface';
import { Users } from '../app-entities/users.entity'
import * as jwt from 'jsonwebtoken'; // 跨域认证解决方案
// nest中，要把一个类定义为服务，就要用@Injectable装饰器来提供元数据，
// 以便让nest可以把它作为依赖注入到控制器中
@Injectable()
export class AuthService {
    user: Users;
    constructor(
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>) {}
        async createToken(userName: string, password: string): Promise<any> {
            const user: JwtPayload = {userName, password};
            return jwt.sign(user, '');
        }

        async validateUser (name: string): Promise<any> {
            return this.usersRepository.findOne({name});
        }

        async findUserByName(name: string): Promise<Users> {
            return this.usersRepository.findOne({name});
        }

        getUser(): Users {
            return this.user;
        }

        async login(name: string, password: string): Promise<any> {
            this.user = await this.usersRepository.findOne({name});
            if (this.user !== undefined && this.user.password === password) {
                return this.createToken(this.user.name, this.user.password);
            } else {
                return 'login failed!';
            }
        }
}