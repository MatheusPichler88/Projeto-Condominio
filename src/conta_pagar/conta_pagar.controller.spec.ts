import { Test, TestingModule } from '@nestjs/testing';
import { ContaPagarController } from './conta_pagar.controller';

describe('ContaPagarController', () => {
  let controller: ContaPagarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContaPagarController],
    }).compile();

    controller = module.get<ContaPagarController>(ContaPagarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
