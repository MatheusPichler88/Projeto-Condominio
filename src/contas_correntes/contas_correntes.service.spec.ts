import { Test, TestingModule } from '@nestjs/testing';
import { ContasCorrentesService } from './contas_correntes.service';

describe('ContasCorrentesService', () => {
  let service: ContasCorrentesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContasCorrentesService],
    }).compile();

    service = module.get<ContasCorrentesService>(ContasCorrentesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
