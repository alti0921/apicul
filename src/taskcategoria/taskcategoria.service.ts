import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskcategoriaDto } from './dto/create-taskcategoria.dto';
import { UpdateTaskcategoriaDto } from './dto/update-taskcategoria.dto';
import { Taskcategoria } from './entities/taskcategoria.entity';

@Injectable()
export class TaskcategoriaService {

  constructor(
    @InjectRepository(Taskcategoria)
    private TaskcategoriaRepository: Repository<Taskcategoria>,
  ){}
  create(createTaskcategoriaDto: CreateTaskcategoriaDto) {
    return this.TaskcategoriaRepository.save(createTaskcategoriaDto);
  }

  findAll() {
    return this.TaskcategoriaRepository.find();
  }

  findOne(id: number) {
    return this.TaskcategoriaRepository.findOneBy({id});
  }

  update(id: number, updateTaskcategoriaDto: UpdateTaskcategoriaDto) {
    return this.TaskcategoriaRepository.update(id,updateTaskcategoriaDto);
  }

  remove(id: number) {
    return this.TaskcategoriaRepository.delete(id);
  }
}
