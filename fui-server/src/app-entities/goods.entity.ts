
import {
    Entity,
    Column,
    PrimaryGeneratedColumn
} from 'typeorm'
/**
 * 水果类实体
 */

 @Entity()
export class Goods {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    name: string

    @Column()
    price: number

    @Column()
    count: number

    @Column()
    unit: string

    @Column()
    unite_price: number

}