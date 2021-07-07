import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Ingredient } from './models/ingredient';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  category: string;

  @Column('jsonb', { nullable: true })
  ingredients?: Ingredient[];
}
