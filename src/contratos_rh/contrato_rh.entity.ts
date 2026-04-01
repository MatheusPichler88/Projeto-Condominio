import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
@Entity('CONTRATOS_RH')
export class CONTRATO_RH {
    @PrimaryGeneratedColumn()
    ID_CONTRATO_RH!: number;

    @Column()
    ID_FUNCIONARIO!: number;

    @Column()
    DESCRICAO!: string;

    @Column()
    DATA_INICIO!: Date;

    @Column()
    DATA_FIM!: Date;

    @Column()
    SALARIO_ACORDADO!: number;
    
}



