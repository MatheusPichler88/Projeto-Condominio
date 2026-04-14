import { Controller, Get, Post, Delete, Put, Patch, Param, Body, NotFoundException } from '@nestjs/common'; 
import { UnidadesService } from './unidades.service';
import { Unidade } from './unidade.entity';

@Controller('unidades')
export class UnidadesController {
  constructor(private readonly unidadesService: UnidadesService) {}

  @Get()
  findAll(): Promise<Unidade[]> {
    return this.unidadesService.findAll();
  }

  @Post()
  create(@Body() unidade: Unidade): Promise<Unidade> {
    return this.unidadesService.create(unidade);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() unidade: Unidade): Promise<Unidade | null> {
    return this.unidadesService.update(id, unidade);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.unidadesService.remove(id);
  }
}
