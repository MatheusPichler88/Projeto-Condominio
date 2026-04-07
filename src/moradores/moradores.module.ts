import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Morador } from './morador.entity';
import { MoradoresService } from './moradores.service';
import { MoradoresController } from './moradores.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Morador])],
  providers: [MoradoresService],
  controllers: [MoradoresController]
})
export class MoradoresModule {}
