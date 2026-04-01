import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
@Entity('CONTRATOS')
export class CONTRATO {
    @PrimaryGeneratedColumn()
    ID_CONTRATO!: number;

    @Column()
    ID_FORNECEDOR!: number;

    @Column()
    DESCRICAO!: string;

    @Column()
    DATA_INICIO!: Date;

    @Column()
    DATA_FIM!: Date;

    @Column()
    VALOR!: number;
    
}