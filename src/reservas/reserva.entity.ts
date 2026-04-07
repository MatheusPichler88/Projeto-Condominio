import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('RESERVAS')
export class Reserva {
    @PrimaryGeneratedColumn()
    ID_RESERVA!: number;

    @Column()
    ID_AREA_COMUM!: number;

    @Column()
    ID_MORADOR!: number;

    @Column()
    DATA_RESERVA!: Date;

    @Column({ length: 30 })
    HR_INICIO!: string;

    @Column({ length: 30 })
    HR_FIM!: string;

    @Column({ length: 20 })
    STATUS!: string;
}
