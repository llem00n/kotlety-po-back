import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { City } from './city.model';
import { Tag } from './tag.model';

@Entity('events')
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 30,
  })
  name: string;

  @Column()
  description: string;

  @Column()
  expiryDate: Date;

  @ManyToOne(() => City)
  city: City;

  @ManyToMany(() => Tag)
  @JoinTable()
  tags: Tag[];

  @Column()
  rating: number;
}
