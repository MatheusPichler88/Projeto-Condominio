import { Controller, Get, Post, Delete, Put, Patch, Param, Body, NotFoundException } from '@nestjs/common'; 
import { BoletosService } from './boletos.service';
import { Boleto } from './boleto.entity';


@Controller('boletos')
export class BoletosController {
  constructor(private readonly boletosService: BoletosService) {}

  @Get()
  findAll(): Promise<Boleto[]> {
    return this.boletosService.findAll();
  }

  @Post()
  create(@Body() boleto: Boleto): Promise<Boleto> {
    return this.boletosService.create(boleto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() boleto: Boleto): Promise<Boleto | null> {
    return this.boletosService.update(id, boleto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.boletosService.remove(id);
  }
}
