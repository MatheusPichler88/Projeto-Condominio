import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('UNIDADES')
export class Unidade {
    @PrimaryGeneratedColumn()
    ID_UNIDADE!: number;

    @Column({ length: 10 })
    NUMERO_UNIDADE!: string;

    @Column({ length: 10 })
    BLOCO!: string;

    @Column({ length: 50 })
    TIPO!: string; 
}