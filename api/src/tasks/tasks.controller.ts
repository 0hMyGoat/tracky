import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    if (!createTaskDto.name) {
      throw new BadRequestException('The name is mandatory', {
        cause: new Error(),
        description: 'Please add a name to the task',
      });
    }
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  async findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const task = await this.tasksService.findOne(+id);

    if (!task) {
      throw new NotFoundException('Task not found', {
        cause: new Error(),
        description: `Task with id ${id} not found`,
      });
    }

    return task;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    await this.findOne(id);
    return this.tasksService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.findOne(id);
    return this.tasksService.remove(+id);
  }

  @Post(':id/complete')
  async complete(@Param('id') id: string) {
    await this.findOne(id);
    return this.tasksService.completeTask(+id);
  }

  @Post(':id/uncomplete')
  async uncomplete(@Param('id') id: string) {
    await this.findOne(id);
    return this.tasksService.uncompleteTask(+id);
  }
}
