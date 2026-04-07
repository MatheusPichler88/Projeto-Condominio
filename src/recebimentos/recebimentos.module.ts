import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recebimento } from './recebimentos.entity';
import { RecebimentosService } from './recebimentos.service';
import { RecebimentosController } from './recebimentos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Recebimento])],
  providers: [RecebimentosService],
  controllers: [RecebimentosController]
})
export class RecebimentosModule {}
