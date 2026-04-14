import { Controller, Get, Post, Delete, Put, Patch, Param, Body, NotFoundException } from '@nestjs/common'; 
import { ContasReceberService } from './contas_receber.service';
import { ContaReceber } from './conta_receber.entity';

@Controller('contas-receber')
export class ContasReceberController {
  constructor(private readonly contasReceberService: ContasReceberService) {}

  @Get()
  findAll(): Promise<ContaReceber[]> {
    return this.contasReceberService.findAll();
  }

  @Post()
  create(@Body() contaReceber: ContaReceber): Promise<ContaReceber> {
    return this.contasReceberService.create(contaReceber);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() contaReceber: ContaReceber): Promise<ContaReceber | null> {
    return this.contasReceberService.update(id, contaReceber);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.contasReceberService.remove(id);
  }
}
