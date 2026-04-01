import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('CONTA_RECEBER')
export class ContaReceber {
    @PrimaryGeneratedColumn()
    ID_CONTA_RECEBER!: number;

    @Column()
    ID_MORADOR!: number;

    @Column({ length: 100 })
    DESCRICAO!: string;

    @Column('decimal', { precision: 10, scale: 2 })
    VALOR!: number;

    @Column()
    DATA_VENCIMENTO!: Date;

    @Column({ length: 20 })
    STATUS!: string;
}