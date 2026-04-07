import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContaPagar } from './contas_pagar.entity';

@Injectable()
export class ContaPagarService {
  constructor(
    @InjectRepository(ContaPagar)
    private contaPagarRepo: Repository<ContaPagar>,
  ) {}

  findAll(): Promise<ContaPagar[]> {
    return this.contaPagarRepo.find();
  }

  create(contaPagar: ContaPagar): Promise<ContaPagar> {
    return this.contaPagarRepo.save(contaPagar);
  }
}
