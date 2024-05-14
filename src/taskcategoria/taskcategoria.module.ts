import { Module } from '@nestjs/common';
import { TaskcategoriaService } from './taskcategoria.service';
import { TaskcategoriaController } from './taskcategoria.controller';
import { Taskcategoria } from './entities/taskcategoria.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Taskcategoria])],

  controllers: [TaskcategoriaController],
  providers: [TaskcategoriaService],
})
export class TaskcategoriaModule {}
