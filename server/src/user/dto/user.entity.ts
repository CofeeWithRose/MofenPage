import { Entity, PrimaryGeneratedColumn, PrimaryColumn, Column } from "typeorm";

@Entity()
export default class UserEntity{
        
    @PrimaryGeneratedColumn('uuid')
    public id: string;


    @Column({ length: 256 })
    public userName: string;

    @Column({length:256})
    public pwd: string;
}