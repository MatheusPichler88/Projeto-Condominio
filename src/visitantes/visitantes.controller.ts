import { Controller, Get, Post, Delete, Put, Patch, Param, Body, NotFoundException } from '@nestjs/common'; 
import { VisitantesService } from './visitantes.service';
import { Visitante } from './visitante.entity';

@Controller('visitantes')
export class VisitantesController {
  constructor(private readonly visitantesService: VisitantesService) {}

  @Get()
  findAll(): Promise<Visitante[]> {
    return this.visitantesService.findAll();
  }

  @Post()
  create(@Body() visitante: Visitante): Promise<Visitante> {
    return this.visitantesService.create(visitante);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() visitante: Visitante): Promise<Visitante | null> {
    return this.visitantesService.update(id, visitante);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.visitantesService.remove(id);
  }
}
