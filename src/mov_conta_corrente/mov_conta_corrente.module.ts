import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovContaCorrente } from './mov_conta_corrente.entity';
import { MovContaCorrenteService } from './mov_conta_corrente.service';
import { MovContaCorrenteController } from './mov_conta_corrente.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MovContaCorrente])],
  providers: [MovContaCorrenteService],
  controllers: [MovContaCorrenteController]
})
export class MovContaCorrenteModule {}
