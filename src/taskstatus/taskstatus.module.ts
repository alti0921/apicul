import { Module } from '@nestjs/common';
import { TaskstatusService } from './taskstatus.service';
import { TaskstatusController } from './taskstatus.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Taskstatus } from './entities/taskstatus.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Taskstatus])],

  controllers: [TaskstatusController],
  providers: [TaskstatusService],
})
export class TaskstatusModule {}
