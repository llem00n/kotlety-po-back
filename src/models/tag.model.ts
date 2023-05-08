import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('tags')
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 30
  })
  name: string;
}