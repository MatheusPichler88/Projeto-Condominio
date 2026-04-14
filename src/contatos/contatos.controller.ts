import{ Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ContatosService } from './contatos.service';
import { Contato } from './contato.entity';


@Controller('contatos')
export class ContatosController {
  constructor(private readonly contatosService: ContatosService) {}

  @Get()
  findAll(): Promise<Contato[]> {
    return this.contatosService.findAll();
  }

  @Post()
  create(@Body() contato: Contato): Promise<Contato> {
    return this.contatosService.create(contato);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() contato: Contato): Promise<Contato | null> {
    return this.contatosService.update(id, contato);
  }

  @Delete(':id')
  remove(@Body('id') id: number): Promise<void> {
    return this.contatosService.remove(id);
  }
}
