import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Sex } from "./sex.model";
import { City } from "./city.model";
import { Tag } from "./tag.model";
import { Event } from "./event.model";

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true
  })
  email: string;

  @Column()
  password: string

  @Column()
  birthDate: Date

  @ManyToOne(() => Sex)
  sex: Sex;

  @ManyToOne(() => City)
  city: City;

  @Column()
  isDeleted: boolean;

  @ManyToMany(() => Event)
  @JoinTable()
  likedEvents: Promise<Event[]>

  @ManyToMany(() => Tag)
  @JoinTable()
  preferredTags: Tag[];
}