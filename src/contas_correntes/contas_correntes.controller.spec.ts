import { Test, TestingModule } from '@nestjs/testing';
import { ContasCorrentesController } from './contas_correntes.controller';

describe('ContasCorrentesController', () => {
  let controller: ContasCorrentesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContasCorrentesController],
    }).compile();

    controller = module.get<ContasCorrentesController>(ContasCorrentesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
