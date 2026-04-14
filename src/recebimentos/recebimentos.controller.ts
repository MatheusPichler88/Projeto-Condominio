import { Controller, Get, Post, Delete, Put, Patch, Param, Body, NotFoundException } from '@nestjs/common';  
import { RecebimentosService } from './recebimentos.service';
import { Recebimento } from './recebimentos.entity';


@Controller('recebimentos')
export class RecebimentosController {
  constructor(private readonly recebimentosService: RecebimentosService) {}

  @Get()
  findAll(): Promise<Recebimento[]> {
    return this.recebimentosService.findAll();
  }

  @Post()
  create(@Body() recebimento: Recebimento): Promise<Recebimento> {
    return this.recebimentosService.create(recebimento);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() recebimento: Recebimento): Promise<Recebimento | null> {
    return this.recebimentosService.update(id, recebimento);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.recebimentosService.remove(id);
  }
}
