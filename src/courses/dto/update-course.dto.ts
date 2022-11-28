import { CreateCourseDto } from "./create-course.dto";
import { PartialType } from 


export class UpdateCourseDto extends PartialType(CreateCourseDto) {}
