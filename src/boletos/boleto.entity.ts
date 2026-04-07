import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('BOLETOS')
export class Boleto {
    @PrimaryGeneratedColumn()
    ID_BOLETO!: number;

    @Column()
    ID_CONTA_RECEBER!: number;

    @Column({ length: 50 })
    CODIGO_BARRAS!: string;

    @Column()
    DATA_VENCIMENTO!: Date;

    @Column('decimal', { precision: 10, scale: 2 })
    VALOR!: number;

    @Column({ length: 20 })
    STATUS!: string;
}
