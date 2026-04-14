import { Controller, Get, Post, Delete, Put, Patch, Param, Body, NotFoundException } from '@nestjs/common'; 
import { FuncionariosService } from './funcionarios.service';
import { Funcionario } from './funcionario.entity';

@Controller('funcionarios')
export class FuncionariosController {
  constructor(private readonly funcionariosService: FuncionariosService) {}

  @Get()
  findAll(): Promise<Funcionario[]> {
    return this.funcionariosService.findAll();
  }

  @Post()
  create(@Body() funcionario: Funcionario): Promise<Funcionario> {
    return this.funcionariosService.create(funcionario);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() funcionario: Funcionario): Promise<Funcionario | null> {
    return this.funcionariosService.update(id, funcionario);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.funcionariosService.remove(id);
  }
}
