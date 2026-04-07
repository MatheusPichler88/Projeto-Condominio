import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContaCorrente } from './conta_corrente.entity';
import { ContasCorrentesService } from './contas_correntes.service';
import { ContasCorrentesController } from './contas_correntes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ContaCorrente])],
  providers: [ContasCorrentesService],
  controllers: [ContasCorrentesController]
})
export class ContasCorrentesModule {}
