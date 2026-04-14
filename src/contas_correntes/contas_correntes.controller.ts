import { Controller, Get, Post, Delete, Put, Patch, Param, Body, NotFoundException } from '@nestjs/common'; 
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

  @Put(':id')
  update(@Param('id') id: number, @Body() contaCorrente: ContaCorrente): Promise<ContaCorrente | null> {
    return this.contasCorrentesService.update(id, contaCorrente);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.contasCorrentesService.remove(id);
  }
}
