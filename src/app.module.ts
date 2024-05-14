import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { TasksModule } from './tasks/tasks.module';
import { Task } from './tasks/entities/task.entity';
import { TaskcategoriaModule } from './taskcategoria/taskcategoria.module';
import { Taskcategoria } from './taskcategoria/entities/taskcategoria.entity';
import { TaskstatusModule } from './taskstatus/taskstatus.module';
import { Taskstatus } from './taskstatus/entities/taskstatus.entity';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306, 
    username: 'root',
    password: 'altime0921',
    database: 'apicul',
    entities: [User,Task,Taskcategoria,Taskstatus], 
    synchronize: true,
  }), UserModule, TasksModule, TaskcategoriaModule, TaskstatusModule], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} 
   