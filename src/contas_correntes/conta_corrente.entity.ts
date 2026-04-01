import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('CONTA_CORRENTE')
export class ContaCorrente {
    @PrimaryGeneratedColumn()
    ID_CONTA_CORRENTE!: number;

    @Column({ length: 50 })
    BANCO!: string;

    @Column({ length: 10 })
    AGENCIA!: string;

    @Column({ length: 20 })
    NUM_CONTA!: string;

    @Column('decimal', { precision: 10, scale: 2 })
    SALDO_ATUAL!: number;
}