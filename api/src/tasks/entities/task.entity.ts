import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  @IsNotEmpty()
  name: string;
  @Column({ default: false })
  completed: boolean;
}
