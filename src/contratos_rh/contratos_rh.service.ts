import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CONTRATO_RH } from './contrato_rh.entity';

@Injectable()
export class ContratosRhService {
  constructor(
    @InjectRepository(CONTRATO_RH)
    private contratosRhRepo: Repository<CONTRATO_RH>,
  ) {}

  findAll(): Promise<CONTRATO_RH[]> {
    return this.contratosRhRepo.find();
  }

  create(contratoRh: CONTRATO_RH): Promise<CONTRATO_RH> {
    return this.contratosRhRepo.save(contratoRh);
  }

  async update(id: number, dados: Partial<CONTRATO_RH>): Promise<CONTRATO_RH | null> {
    await this.contratosRhRepo.update(id, dados);
    return this.contratosRhRepo.findOneBy({ ID_CONTRATO_RH: id });
  }

  async remove(id: number): Promise<void> {
    await this.contratosRhRepo.delete(id);
  }
}
