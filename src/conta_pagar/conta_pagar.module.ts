import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContaPagar } from './contas_pagar.entity';
import { ContaPagarService } from './conta_pagar.service';
import { ContaPagarController } from './conta_pagar.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ContaPagar])],
  providers: [ContaPagarService],
  controllers: [ContaPagarController]
})
export class ContaPagarModule {}
