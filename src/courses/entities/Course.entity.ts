import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tag } from "./Tag.entity";

@Entity("courses")
export class Course {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;
  
  @Column()
  description: string;
  
  @JoinTable()
  @ManyToMany(() => Tag, (tag: Tag) => tag.courses, {
    cascade: true
  })
  tags: string[];
}