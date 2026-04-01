import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('ENDERECOS')
export class Endereco {
    @PrimaryGeneratedColumn()
    ID_ENDERECO!: number;

    @Column()
    ID_PESSOA!: number;

    @Column({ length: 150 })
    LOGRADOURO!: string;

    @Column({ length: 10 })
    NUMERO!: string;

    @Column({ length: 100 })
    BAIRRO!: string;

    @Column({ length: 100 })
    CIDADE!: string;

    @Column({ length: 2 })
    UF!: string;

    @Column({ length: 10 })
    CEP!: string;
}