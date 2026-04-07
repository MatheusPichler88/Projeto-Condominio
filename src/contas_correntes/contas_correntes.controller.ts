import { Controller, Get, Post, Body } from '@nestjs/common';
import { ContasCorrentesService } from './contas_correntes.service';
import { ContaCorrente } from './conta_corrente.entity';

@Controller('contas-correntes')
export class ContasCorrentesController {
  constructor(private readonly contasCorrentesService: ContasCorrentesService) {}

  @Get()
  findAll(): Promise<ContaCorrente[]> {
    return this.contasCorrentesService.findAll();
  }

  @Post()
  create(@Body() contaCorrente: ContaCorrente): Promise<ContaCorrente> {
    return this.contasCorrentesService.create(contaCorrente);
  }
}
