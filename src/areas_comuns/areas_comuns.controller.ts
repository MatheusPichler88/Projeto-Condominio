import { Controller, Get, Post, Delete, Put, Patch, Param, Body, NotFoundException } from '@nestjs/common'; 
import { AreasComunsService } from './areas_comuns.service';
import { AreaComum } from './area_comum.entity';


@Controller('areas-comuns')
export class AreasComunsController {
  constructor(private readonly areasComunsService: AreasComunsService) {}

  @Get()
  findAll(): Promise<AreaComum[]> {
    return this.areasComunsService.findAll();
  }

  @Post()
  create(@Body() areaComum: AreaComum): Promise<AreaComum> {
    return this.areasComunsService.create(areaComum);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() areaComum: AreaComum): Promise<AreaComum | null> {
    return this.areasComunsService.update(id, areaComum);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.areasComunsService.remove(id);
  }
}
