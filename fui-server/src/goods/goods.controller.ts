import { Get, Post, Controller, HttpStatus, Param } from '@nestjs/common';
import {goodsService} from './goods.service'
import {Goods} from '../app-entities/goods.entity'

@Controller('goods')
export class goodsController {
    constructor (private readonly goodsService: goodsService) {}

    @Get()
    root(): string{
        return this.goodsService.root()
    }

    @Get('/list')
    async goodsList(): Promise<Goods[]> {
        return this.goodsService.goodsList()
    }

    @Get('/:id')
    async findGoodsById(@Param() params): Promise<Goods> {
        return this.goodsService.findGoodsById(params.id)
    }
}