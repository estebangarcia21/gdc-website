import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export default class Todo extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  group: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  value: string;

  @Field()
  @Column()
  completed: boolean;
}
