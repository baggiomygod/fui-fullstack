import { Injectable } from '@nestjs/common';
import {Goods} from '../app-entities/goods.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager, getConnection } from 'typeorm';

@Injectable()
export class goodsService {
    constructor(
        @InjectRepository(Goods)
        private readonly goodsRepository: Repository<Goods>){}
    root(): string {
        return 'goods list'
    }

    async goodsList(): Promise<Goods[]> {
        return await this.goodsRepository.find()
    }

    async findGoodsById(id: string): Promise<Goods> {
        const params = {id}
        return await this.goodsRepository.findOne(params)
    }
}