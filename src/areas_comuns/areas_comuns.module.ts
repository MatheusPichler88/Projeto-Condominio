import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AreaComum } from './area_comum.entity';
import { AreasComunsService } from './areas_comuns.service';
import { AreasComunsController } from './areas_comuns.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AreaComum])],
  providers: [AreasComunsService],
  controllers: [AreasComunsController]
})
export class AreasComunsModule {}
