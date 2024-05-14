import { Test, TestingModule } from '@nestjs/testing';
import { TaskcategoriaService } from './taskcategoria.service';

describe('TaskcategoriaService', () => {
  let service: TaskcategoriaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskcategoriaService],
    }).compile();

    service = module.get<TaskcategoriaService>(TaskcategoriaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
