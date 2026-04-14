import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContaCorrente } from './conta_corrente.entity';    

@Injectable()
export class ContasCorrentesService {
    constructor(
        @InjectRepository(ContaCorrente)
        private contasCorrentesRepo: Repository<ContaCorrente>,
    ) {}

    findAll(): Promise<ContaCorrente[]> {
        return this.contasCorrentesRepo.find();
    }

    create(contaCorrente: ContaCorrente): Promise<ContaCorrente> {
        return this.contasCorrentesRepo.save(contaCorrente);
    }

    async update(id: number, dados: Partial<ContaCorrente>): Promise<ContaCorrente | null> {
        await this.contasCorrentesRepo.update(id, dados);
        return this.contasCorrentesRepo.findOneBy({ ID_CONTA_CORRENTE: id });
    }

    async remove(id: number): Promise<void> {
        await this.contasCorrentesRepo.delete(id);
    }
}
