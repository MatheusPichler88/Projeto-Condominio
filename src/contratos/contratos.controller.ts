import { Controller, Get, Post, Delete, Put, Patch, Param, Body, NotFoundException } from '@nestjs/common'; 
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

  @Put(':id')
  update(@Param('id') id: number, @Body() contrato: CONTRATO): Promise<CONTRATO | null> {
    return this.contratosService.update(id, contrato);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.contratosService.remove(id);
  }
}
