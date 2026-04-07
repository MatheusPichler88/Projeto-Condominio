import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CONTRATO_RH } from './contrato_rh.entity';
import { ContratosRhService } from './contratos_rh.service';
import { ContratosRhController } from './contratos_rh.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CONTRATO_RH])],
  providers: [ContratosRhService],
  controllers: [ContratosRhController]
})
export class ContratosRhModule {}
