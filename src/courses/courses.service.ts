import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/Course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>
  ) {}

  async findAll() {
    return await this.courseRepository.find();
  }

  async findOneById(id: string) {
    const course = await this.courseRepository.findOne(id)

    if (!course) {
      throw new NotFoundException('Course not found!')
    }

    return course
  }

  async create(createCourseDto: CreateCourseDto) {
    const course = this.courseRepository.create(createCourseDto)
    return this.courseRepository.save(course)
  }

  async update(id: string, updateCourseDto: UpdateCourseDto) {
    const course = await this.courseRepository.preload({
      id: id, // convert string to number
      ...updateCourseDto
    })

    if (!course) {
      throw new NotFoundException('Course not found!')
    }

    return this.courseRepository.save(course)
  }

  async delete(id: string) {
    const course = await this.courseRepository.findOne(id)

    if (!course) {
      throw new NotFoundException('Course not found!')
    }

    await this.courseRepository.delete(id)
  }
}
