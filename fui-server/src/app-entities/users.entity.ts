import { Entity, PrimaryGeneratedColumn, Column, ManyToOne,  JoinTable} from 'typeorm';
@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: nunmber

    @Column()
    name: string

    @Column()
    password: string

    @Column()
    age: number

    @Column()
    address: string
}