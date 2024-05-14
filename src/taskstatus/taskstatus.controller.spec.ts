import { Test, TestingModule } from '@nestjs/testing';
import { TaskstatusController } from './taskstatus.controller';
import { TaskstatusService } from './taskstatus.service';

describe('TaskstatusController', () => {
  let controller: TaskstatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskstatusController],
      providers: [TaskstatusService],
    }).compile();

    controller = module.get<TaskstatusController>(TaskstatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
