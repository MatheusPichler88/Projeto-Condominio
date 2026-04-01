import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
import { Decimal128 } from 'typeorm/browser';
@Entity('CONTAS_PAGAR')
export class ContaPagar {
    @PrimaryGeneratedColumn()
    ID_CONTA_PAGAR!: number;

    @Column()
    ID_FORNECEDOR!: number;

    DESCRICAO!: string;

    @Column('decimal', { precision: 10, scale: 2 })
    VALOR!: number;
    
    @Column()
    DATA_VENCIMENTO!: Date;

    @Column()
    STATUS!: string;
}