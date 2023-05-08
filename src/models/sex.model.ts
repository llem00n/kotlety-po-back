import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('sexes')
export class Sex {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 10
  })
  name: string;
}