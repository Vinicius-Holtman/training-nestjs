import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('courses')
export class CoursesController {

  @Get()
  findAll(): string {
    return 'List all'
  }

  @Get(':id')
  findById(@Param('id') id: string): string {
    return `List one by ${id}`
  }

  @Post()
  create(@Body() body) {
    return body
  }
}
