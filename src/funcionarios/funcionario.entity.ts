import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('FUNCIONARIOS')
export class Funcionario {
    @PrimaryGeneratedColumn()
    ID_FUNCIONARIO!: number;
    
    @Column()
    ID_PESSOA!: number;

    @Column({ length: 100 })
    FUNCAO!: string;

    @Column()
    DATA_ADMISSAO!: Date;

    @Column()
    SALARIO!: number;
}