import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContaReceber } from './conta_receber.entity';
import { ContasReceberService } from './contas_receber.service';
import { ContasReceberController } from './contas_receber.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ContaReceber])],
  providers: [ContasReceberService],
  controllers: [ContasReceberController]
})
export class ContasReceberModule {}
