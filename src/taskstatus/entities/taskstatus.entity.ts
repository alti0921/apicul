import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Taskstatus {
    @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
