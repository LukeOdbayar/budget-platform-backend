import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Expense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  description: string;

  @Column()
  category: string;

  @Column()
  date: Date;
}
