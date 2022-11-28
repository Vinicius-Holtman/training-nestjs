import { BeforeInsert, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tag } from "./Tag.entity";
import { v4 as uuidV4 } from "uuid"

@Entity("courses")
export class Course {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;
  
  @Column()
  description: string;
  
  @JoinTable({name: 'courses_tags'})
  @ManyToMany(() => Tag, (tag: Tag) => tag.courses, {
    cascade: true
  })
  tags: string[];

  @CreateDateColumn({ type: "timestamp"})
  created_at: Date;

  @BeforeInsert()
  generatedId() {
    if (this.id) {
      return
    }

    this.id = uuidV4()
  }
}