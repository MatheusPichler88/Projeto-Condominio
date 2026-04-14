import { Controller, Get, Post, Delete, Put, Patch, Param, Body, NotFoundException } from '@nestjs/common'; 
import { ComunicadosService } from './comunicados.service';
import { Comunicado } from './comunicado.entity';

@Controller('comunicados')
export class ComunicadosController {
  constructor(private readonly comunicadosService: ComunicadosService) {}

  @Get()
  findAll(): Promise<Comunicado[]> {
    return this.comunicadosService.findAll();
  }

  @Post()
  create(@Body() comunicado: Comunicado): Promise<Comunicado> {
    return this.comunicadosService.create(comunicado);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() comunicado: Comunicado): Promise<Comunicado | null> {
    return this.comunicadosService.update(id, comunicado);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.comunicadosService.remove(id);
  }
}
