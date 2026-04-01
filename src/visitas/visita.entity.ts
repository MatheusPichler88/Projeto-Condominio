import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('VISITAS')
export class Visita {
    @PrimaryGeneratedColumn()
    ID_VISITA!: number;

    @Column()
    ID_VISITANTE!: number;

    @Column()
    ID_UNIDADE!: number;

    @Column()
    ID_MORADOR_AUTORIZACAO!: number;

    @Column({ length: 20 })
    PLACA_VEICULO!: string;

    @Column()
    DATA_ENTRADA!: Date;

    @Column()
    DATA_SAIDA!: Date;
}