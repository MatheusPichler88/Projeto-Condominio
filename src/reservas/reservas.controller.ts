import { Controller, Get, Post, Delete, Put, Patch, Param, Body, NotFoundException } from '@nestjs/common'; 
import { ReservasService } from './reservas.service';
import { Reserva } from './reserva.entity';

@Controller('reservas')
export class ReservasController {
  constructor(private readonly reservasService: ReservasService) {}

  @Get()
  findAll(): Promise<Reserva[]> {
    return this.reservasService.findAll();
  }

  @Post()
  create(@Body() reserva: Reserva): Promise<Reserva> {
    return this.reservasService.create(reserva);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() reserva: Reserva): Promise<Reserva | null> {
    return this.reservasService.update(id, reserva);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.reservasService.remove(id);
  }
}
