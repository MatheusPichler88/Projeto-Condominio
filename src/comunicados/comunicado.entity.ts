import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('COMUNICADOS')
export class Comunicado {
    @PrimaryGeneratedColumn()
    ID_COMUNICADO!: number;

    @Column()
    TITULO!: string;

    @Column()
    MENSAGEM!: string;

    @Column()
    DT_COMUNICADO!: Date;

    @Column({ length: 30 })
    HR_COMUNICADO!: string;

    @Column({ length: 30 })
    TIPO!: string;
}