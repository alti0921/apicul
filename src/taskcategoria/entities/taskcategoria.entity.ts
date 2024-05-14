
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Taskcategoria {
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column()
    description: string;

    @Column()
    color: string;

}