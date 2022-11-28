import { BeforeInsert, Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Course } from "./Course.entity";
import { v4 as uuidV4 } from "uuid"

@Entity('tags')
export class Tag {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => Course, (course: Course) => course.tags)
  courses: Course[];

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date

  @BeforeInsert()
  generatedId() {
    if (this.id) {
      return
    }

    this.id = uuidV4()
  }
}
