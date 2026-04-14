import { Controller, Get, Post, Delete, Put, Patch, Param, Body, NotFoundException } from '@nestjs/common'; 
import { MoradoresService } from './moradores.service';
import { Morador } from './morador.entity';

@Controller('moradores')
export class MoradoresController {
  constructor(private readonly moradoresService: MoradoresService) {}

  @Get()
  findAll(): Promise<Morador[]> {
    return this.moradoresService.findAll();
  }

  @Post()
  create(@Body() morador: Morador): Promise<Morador> {
    return this.moradoresService.create(morador);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() morador: Morador): Promise<Morador | null> {
    return this.moradoresService.update(id, morador);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.moradoresService.remove(id);
  }
}
