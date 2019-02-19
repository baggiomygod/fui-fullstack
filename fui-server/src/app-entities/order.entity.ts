
import {
    Entity,
    Column,
    PrimaryGeneratedColumn
} from 'typeorm'
/**
 * 订单类实体
 */

 @Entity()
export class Order { // 这里的名称自动在数据库创建表或关联表
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    name: string

    @Column()
    pay_time: number

    @Column()
    count: number

    @Column()
    pay_price: number

    @Column()
    goods_id: string
}