import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Income {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  source: string;

  @Column()
  date: Date;
}
