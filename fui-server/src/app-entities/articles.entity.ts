import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    // ManyToMany, 
    // JoinTable
} from "typeorm";

/**
 * fui-app文章列表实体
 */

@Entity()
export class Articles { // 这里的名称自动在数据库创建表或关联表
    // 自动递增，按顺序生成唯一的标识列
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    title: string

    @Column()
    content: string

    @Column()
    collection: number

    @Column()
    like: number

    @Column()
    views: number

    @Column()
    img_url: string

    @Column()
    author: string

    @Column()
    author_id: string
}

