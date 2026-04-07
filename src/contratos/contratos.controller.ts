import { Controller, Get, Post, Body } from '@nestjs/common';
import { ContratosService } from './contratos.service';
import { CONTRATO } from './contrato.entity';

@Controller('contratos')
export class ContratosController {
  constructor(private readonly contratosService: ContratosService) {}

  @Get()
  findAll(): Promise<CONTRATO[]> {
    return this.contratosService.findAll();
  }

  @Post()
  create(@Body() contrato: CONTRATO): Promise<CONTRATO> {
    return this.contratosService.create(contrato);
  }
}
