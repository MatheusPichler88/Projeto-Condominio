import { Controller, Get, Post, Body } from '@nestjs/common';
import { ContratosRhService } from './contratos_rh.service';
import { CONTRATO_RH } from './contrato_rh.entity';

@Controller('contratos-rh')
export class ContratosRhController {
  constructor(private readonly contratosRhService: ContratosRhService) {}

  @Get()
  findAll(): Promise<CONTRATO_RH[]> {
    return this.contratosRhService.findAll();
  }

  @Post()
  create(@Body() contratoRh: CONTRATO_RH): Promise<CONTRATO_RH> {
    return this.contratosRhService.create(contratoRh);
  }
}
