import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('RECEBIMENTOS')
export class Recebimento {
    @PrimaryGeneratedColumn()
    ID_RECEBIMENTO!: number;

    @Column()
    ID_CONTA_RECEBER!: number;

    @Column()
    DATA_RECEBIMENTO!: Date;

    @Column()
    VALOR_RECEBIDO!: number;

    @Column({ length: 20 })
    FORMA_RECEBIMENTO!: string;
}