import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
@Entity('AREAS_COMUNS')
export class AreaComum {
    @PrimaryGeneratedColumn()
    ID_AREA_COMUM!: number;

    @Column({ length: 100 })
    NOME_AREA_COMUM!: string;

    @Column({ type: 'text' }) 
    DESCR_AREA!: string; 
    
    @Column()
    CAPACIDADE!: number;
    
}