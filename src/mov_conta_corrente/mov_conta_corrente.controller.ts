import { Controller, Get, Post, Delete, Put, Patch, Param, Body, NotFoundException } from '@nestjs/common'; 
import { MovContaCorrenteService } from './mov_conta_corrente.service';
import { MovContaCorrente } from './mov_conta_corrente.entity';


@Controller('mov-conta-corrente')
export class MovContaCorrenteController {
  constructor(private readonly movContaCorrenteService: MovContaCorrenteService) {}

  @Get()
  findAll(): Promise<MovContaCorrente[]> {
    return this.movContaCorrenteService.findAll();
  }

  @Post()
  create(@Body() movContaCorrente: MovContaCorrente): Promise<MovContaCorrente> {
    return this.movContaCorrenteService.create(movContaCorrente);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() movContaCorrente: MovContaCorrente): Promise<MovContaCorrente | null> {
    return this.movContaCorrenteService.update(id, movContaCorrente);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.movContaCorrenteService.remove(id);
  }
}
