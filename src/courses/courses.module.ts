import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { courseProviders } from './courses.providers'

@Module({
  imports: [DatabaseModule],
  controllers: [CoursesController],
  providers: [CoursesService, ...courseProviders],
})
export class CoursesModule {}
