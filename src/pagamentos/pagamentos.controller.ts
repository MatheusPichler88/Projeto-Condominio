import { Controller, Get, Post, Delete, Put, Patch, Param, Body, NotFoundException } from '@nestjs/common'; 
import { PagamentosService } from './pagamentos.service';
import { Pagamento } from './pagamento.entity';

@Controller('pagamentos')
export class PagamentosController {
  constructor(private readonly pagamentosService: PagamentosService) {}

  @Get()
  findAll(): Promise<Pagamento[]> {
    return this.pagamentosService.findAll();
  }

  @Post()
  create(@Body() pagamento: Pagamento): Promise<Pagamento> {
    return this.pagamentosService.create(pagamento);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() pagamento: Pagamento): Promise<Pagamento | null> {
    return this.pagamentosService.update(id, pagamento);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.pagamentosService.remove(id);
  }

  
}
