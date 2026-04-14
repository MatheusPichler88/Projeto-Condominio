import { Controller, Get, Post, Delete, Put, Patch, Param, Body, NotFoundException } from '@nestjs/common'; 
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

  @Put(':id')
  update(@Param('id') id: number, @Body() contratoRh: CONTRATO_RH): Promise<CONTRATO_RH | null> {
    return this.contratosRhService.update(id, contratoRh);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.contratosRhService.remove(id);
  }
}
