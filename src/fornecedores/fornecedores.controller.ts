import { Controller, Get, Post, Delete, Put, Patch, Param, Body, NotFoundException } from '@nestjs/common'; 
import { FornecedoresService } from './fornecedores.service';
import { Fornecedor } from './fornecedor.entity';


@Controller('fornecedores')
export class FornecedoresController {
  constructor(private readonly fornecedoresService: FornecedoresService) {}

  @Get()
  findAll(): Promise<Fornecedor[]> {
    return this.fornecedoresService.findAll();
  }

  @Post()
  create(@Body() fornecedor: Fornecedor): Promise<Fornecedor> {
    return this.fornecedoresService.create(fornecedor);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() fornecedor: Fornecedor): Promise<Fornecedor | null> {
    return this.fornecedoresService.update(id, fornecedor);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.fornecedoresService.remove(id);
  }
}
