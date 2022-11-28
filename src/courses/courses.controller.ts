import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

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

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `id: ${id}, e body ${body}`
  }

  @Delete(':id')
  deleteById(@Param('id') id: string): string {
    return `delete by ${id}`
  }
}
