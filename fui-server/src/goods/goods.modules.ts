import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { goodsController } from './goods.controller';
import { goodsService } from './goods.service';
import { Goods } from 'app-entities/goods.entity';
@Module({
    imports: [TypeOrmModule.forFeature([Goods])],
    providers: [goodsService],
    controllers: [goodsController]
})

export class GoodsModule{}