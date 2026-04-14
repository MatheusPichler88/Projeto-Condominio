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

  async update(id: number, dados: Partial<CONTRATO>): Promise<CONTRATO | null> {
    await this.contratosRepo.update(id, dados);
    return this.contratosRepo.findOneBy({ ID_CONTRATO: id });
  }

  async remove(id: number): Promise<void> {
    await this.contratosRepo.delete(id);
  }
}
