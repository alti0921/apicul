import { Test, TestingModule } from '@nestjs/testing';
import { TaskcategoriaController } from './taskcategoria.controller';
import { TaskcategoriaService } from './taskcategoria.service';

describe('TaskcategoriaController', () => {
  let controller: TaskcategoriaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskcategoriaController],
      providers: [TaskcategoriaService],
    }).compile();

    controller = module.get<TaskcategoriaController>(TaskcategoriaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
