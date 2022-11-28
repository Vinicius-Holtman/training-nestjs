import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/Course.entity';
import { Tag } from './entities/Tag.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>
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
    const tags = await Promise.all(
      createCourseDto.tags.map(name => this.preloadTagByName(name))
    )

    const course = this.courseRepository.create({
      ...createCourseDto,
      ...tags
    });

    return this.courseRepository.save(course)
  }

  async update(id: string, updateCourseDto: UpdateCourseDto) {
    const tags = updateCourseDto.tags && (
      await Promise.all(updateCourseDto.tags.map((name) => this.preloadTagByName(name)))
    )

    const course = await this.courseRepository.preload({
      id: id,
      ...updateCourseDto,
      ...tags,
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

  private async preloadTagByName(name: string): Promise<Tag> {
    const tag = await this.tagRepository.findOne({ name })

    if (tag) {
      return tag
    }

    return this.tagRepository.create({ name })
  }
}
