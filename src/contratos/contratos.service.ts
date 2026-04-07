import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CONTRATO } from './contrato.entity';

@Injectable()
export class ContratosService {
  constructor(
    @InjectRepository(CONTRATO)
    private contratosRepo: Repository<CONTRATO>,
  ) {}

  findAll(): Promise<CONTRATO[]> {
    return this.contratosRepo.find();
  }

  create(contrato: CONTRATO): Promise<CONTRATO> {
    return this.contratosRepo.save(contrato);
  }
}
