import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CONTRATO } from './contrato.entity';
import { ContratosService } from './contratos.service';
import { ContratosController } from './contratos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CONTRATO])],
  providers: [ContratosService],
  controllers: [ContratosController]
})
export class ContratosModule {}
