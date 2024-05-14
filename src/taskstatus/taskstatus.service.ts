import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskstatusDto } from './dto/create-taskstatus.dto';
import { UpdateTaskstatusDto } from './dto/update-taskstatus.dto';
import { Taskstatus } from './entities/taskstatus.entity';

@Injectable()
export class TaskstatusService {
  constructor(
    @InjectRepository(Taskstatus)
    private TaskstatusRepository: Repository<Taskstatus>,
  ){}
  create(createTaskstatusDto: CreateTaskstatusDto) {
    return this.TaskstatusRepository.save(createTaskstatusDto);
  }

  findAll() {
    return this.TaskstatusRepository.find();
  }

  findOne(id: number) {
    return this.TaskstatusRepository.findOneBy({id});
  }

  update(id: number, updateTaskstatusDto: UpdateTaskstatusDto) {
    return this.TaskstatusRepository.update(id,updateTaskstatusDto);
  }

  remove(id: number) {
    return this.TaskstatusRepository.delete(id);
  }
}
