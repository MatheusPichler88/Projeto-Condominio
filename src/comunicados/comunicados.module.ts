import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comunicado } from './comunicado.entity';
import { ComunicadosService } from './comunicados.service';
import { ComunicadosController } from './comunicados.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Comunicado])],
  providers: [ComunicadosService],
  controllers: [ComunicadosController]
})
export class ComunicadosModule {}
