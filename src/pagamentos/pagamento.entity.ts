import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('PAGAMENTOS')
export class Pagamento {
    @PrimaryGeneratedColumn()
    ID_PAGAMENTO!: number;

    @Column()
    ID_CONTA_PAGAR!: number;

    @Column()
    DATA_PAGAMENTO!: Date;

    @Column('decimal', { precision: 10, scale: 2 })
    VALOR_PAGO!: number;

    @Column({ length: 20 })
    FORMA_PAGAMENTO!: string;
    
}