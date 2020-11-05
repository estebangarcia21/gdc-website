import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'todos' })
export default class Todo extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  team: string;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  assignee: string;

  @Field()
  @Column()
  task: string;

  @Field()
  @Column()
  completed: boolean;
}
