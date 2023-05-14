import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cities')
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 30,
  })
  name: string;
}
