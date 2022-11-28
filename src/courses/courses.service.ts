import { Injectable } from '@nestjs/common';
import { Course } from './entities/Course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: "Fundamento nestjs",
      description: "Fundamento nestj",
      tags: ["node", "nestjs", "typescript"]
    },
    {
      id: 2,
      name: "Fundamento typescript",
      description: "Fundamento type",
      tags: ["node", "typescript"]
    }
  ];

  findAll() {
    return this.courses;
  }

  findOneById(id: string) {
    return this.courses.find((course) => course.id === Number(id))
  }

  create(createCourseDto: any) {
    return this.courses.push(createCourseDto)
  }

  update(id: string, updateCourseDto: any) {
    const indexCourse = this.courses.findIndex(course => course.id === Number(id))

    return this.courses[indexCourse] = updateCourseDto;
  }

  delete(id: string) {
    const indexCourse = this.courses.findIndex(course => course.id === Number(id))

    if (indexCourse >= 0) {
      this.courses.splice(indexCourse, 1)
    }
  }
}
