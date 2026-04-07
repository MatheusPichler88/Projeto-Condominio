import { Controller, Get, Post, Body } from '@nestjs/common';
import { ContaPagarService } from './conta_pagar.service';
import { ContaPagar } from './contas_pagar.entity';

@Controller('contas-pagar')
export class ContaPagarController {
  constructor(private readonly contaPagarService: ContaPagarService) {}

  @Get()
  findAll(): Promise<ContaPagar[]> {
    return this.contaPagarService.findAll();
  }

  @Post()
  create(@Body() contaPagar: ContaPagar): Promise<ContaPagar> {
    return this.contaPagarService.create(contaPagar);
  }
}
