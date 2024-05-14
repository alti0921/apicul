import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskstatusService } from './taskstatus.service';
import { CreateTaskstatusDto } from './dto/create-taskstatus.dto';
import { UpdateTaskstatusDto } from './dto/update-taskstatus.dto';

@Controller('taskstatus')
export class TaskstatusController {
  constructor(private readonly taskstatusService: TaskstatusService) {}

  @Post()
  create(@Body() createTaskstatusDto: CreateTaskstatusDto) {
    return this.taskstatusService.create(createTaskstatusDto);
  }

  @Get()
  findAll() {
    return this.taskstatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskstatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskstatusDto: UpdateTaskstatusDto) {
    return this.taskstatusService.update(+id, updateTaskstatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskstatusService.remove(+id);
  }
}
