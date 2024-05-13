import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private TaskRepository: Repository<Task>,
  ){}
  create(createTaskDto: CreateTaskDto) {
    return this.TaskRepository.save(createTaskDto);
  }

  findAll() {
    return this.TaskRepository.find();
  }

  findOne(id: number) {
    return this.TaskRepository.findOneBy({id});
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.TaskRepository.update(id,updateTaskDto);
  }

  remove(id: number) {
    return this.TaskRepository.delete(id);
  }
}
