import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pagamento } from './pagamento.entity';

@Injectable()
export class PagamentosService {
  constructor(
    @InjectRepository(Pagamento)
    private pagamentosRepo: Repository<Pagamento>,
  ) {}

    findAll(): Promise<Pagamento[]> {
    return this.pagamentosRepo.find();
  }

  create(pagamento: Pagamento): Promise<Pagamento> {
    return this.pagamentosRepo.save(pagamento);
  }

  async update(id: number, dados: Partial<Pagamento>): Promise<Pagamento | null> {
    await this.pagamentosRepo.update(id, dados);
    return this.pagamentosRepo.findOneBy({ ID_PAGAMENTO: id });
  }

  async remove(id: number): Promise<void> {
    await this.pagamentosRepo.delete(id);
  }
}
