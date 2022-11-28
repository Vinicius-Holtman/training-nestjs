import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll() {
    return this.coursesService.findAll()
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.coursesService.findOneById(id)
  }

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCouseDto: UpdateCourseDto) {
    return this.coursesService.update(id, updateCouseDto)
  }

  @Delete(':id')
  deleteById(@Param('id') id: string) {
    return this.coursesService.delete(id)
  }
}
