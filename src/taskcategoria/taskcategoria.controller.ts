import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskcategoriaService } from './taskcategoria.service';
import { CreateTaskcategoriaDto } from './dto/create-taskcategoria.dto';
import { UpdateTaskcategoriaDto } from './dto/update-taskcategoria.dto';

@Controller('taskcategoria')
export class TaskcategoriaController {
  constructor(private readonly taskcategoriaService: TaskcategoriaService) {}

  @Post()
  create(@Body() createTaskcategoriaDto: CreateTaskcategoriaDto) {
    return this.taskcategoriaService.create(createTaskcategoriaDto);
  }

  @Get()
  findAll() {
    return this.taskcategoriaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskcategoriaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskcategoriaDto: UpdateTaskcategoriaDto) {
    return this.taskcategoriaService.update(+id, updateTaskcategoriaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskcategoriaService.remove(+id);
  }
}
