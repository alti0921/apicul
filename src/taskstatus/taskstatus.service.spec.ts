import { Test, TestingModule } from '@nestjs/testing';
import { TaskstatusService } from './taskstatus.service';

describe('TaskstatusService', () => {
  let service: TaskstatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskstatusService],
    }).compile();

    service = module.get<TaskstatusService>(TaskstatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
