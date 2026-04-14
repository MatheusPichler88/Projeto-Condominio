import { Controller, Get, Post, Delete, Put, Patch, Param, Body, NotFoundException } from '@nestjs/common'; 
import { VisitasService } from './visitas.service';
import { Visita } from './visita.entity';

@Controller('visitas')
export class VisitasController {
  constructor(private readonly visitasService: VisitasService) {}

  @Get()
  findAll(): Promise<Visita[]> {
    return this.visitasService.findAll();
  }

  @Post()
  create(@Body() visita: Visita): Promise<Visita> {
    return this.visitasService.create(visita);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() visita: Visita): Promise<Visita | null> {
    return this.visitasService.update(id, visita);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.visitasService.remove(id);
  }
}
