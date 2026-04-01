import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('MOV_CONTA_CORRENTE')
export class MovContaCorrente {
    @PrimaryGeneratedColumn()
    ID_MOV_CONTA_CORRENTE!: number;
    
    @Column()
    ID_CONTA_CORRENTE!: number;

    @Column()
    ID_CONTA_ORIGEM!: number;

    @Column()
    ID_CONTA_DESTINO!: number;

    @Column({ length: 20 })
    TIPO_MOVIMENTO!: string;

    @Column()
    VALOR!: number;

    @Column()
    DATA_MOVIMENTO!: Date;

    @Column()
    HR_MOVIMENTO!: string;

    @Column()
    DESCRICAO!: string;

}