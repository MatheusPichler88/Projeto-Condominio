import { Controller, Get, Post, Delete, Put, Patch, Param, Body, NotFoundException } from '@nestjs/common'; 
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

  @Put(':id')
  update(@Param('id') id: number, @Body() contaPagar: ContaPagar): Promise<ContaPagar | null> {
    return this.contaPagarService.update(id, contaPagar);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.contaPagarService.remove(id);
  }
}
