import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PessoasModule } from './pessoas/pessoas.module';
import { AreasComunsModule } from './areas_comuns/areas_comuns.module';
import { BoletosModule } from './boletos/boletos.module';
import { ComunicadosModule } from './comunicados/comunicados.module';
import { ContaPagarModule } from './conta_pagar/conta_pagar.module';
import { ContasCorrentesModule } from './contas_correntes/contas_correntes.module';
import { ContasReceberModule } from './contas_receber/contas_receber.module';
import { ContatosModule } from './contatos/contatos.module';
import { ContratosModule } from './contratos/contratos.module';
import { ContratosRhModule } from './contratos_rh/contratos_rh.module';
import { EnderecosModule } from './enderecos/enderecos.module';
import { FornecedoresModule } from './fornecedores/fornecedores.module';
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { MoradoresModule } from './moradores/moradores.module';
import { MovContaCorrenteModule } from './mov_conta_corrente/mov_conta_corrente.module';
import { PagamentosModule } from './pagamentos/pagamentos.module';
import { RecebimentosModule } from './recebimentos/recebimentos.module';
import { ReservasModule } from './reservas/reservas.module';
import { UnidadesModule } from './unidades/unidades.module';
import { VisitantesModule } from './visitantes/visitantes.module';
import { VisitasModule } from './visitas/visitas.module';

@Module({
  imports: [TypeOrmModule.forRoot(
    {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'DBCONDOMINIO',
      autoLoadEntities: true,
      synchronize: true,
    }
  ), PessoasModule, AreasComunsModule, BoletosModule, ComunicadosModule, ContaPagarModule, ContasCorrentesModule, ContasReceberModule, ContatosModule, ContratosModule, ContratosRhModule, EnderecosModule, FornecedoresModule, FuncionariosModule, MoradoresModule, MovContaCorrenteModule, PagamentosModule, RecebimentosModule, ReservasModule, UnidadesModule, VisitantesModule, VisitasModule],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
