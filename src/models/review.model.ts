import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.model";
import { Event } from "./event.model";

@Entity('reviews')
export class Review {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Event)
  event: Event;

  @Column({
    length: 1000
  })
  text: string

  @Column()
  rating: number;

  @Column()
  datetime: Date;

  @Column()
  isDeleted: boolean;
}