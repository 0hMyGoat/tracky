import { PartialType } from '@nestjs/mapped-types';
import { Task } from '../entities/task.entity';

export class CreateTaskDto extends PartialType(Task) {
  name: string;
  completed: boolean = false;
}
