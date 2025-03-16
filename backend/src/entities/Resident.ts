import { Field, InputType, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Post } from "./Post";

@ObjectType()
@Entity()
export class Resident extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  prenom?: string;

  @Field(() => [Post])
  @ManyToMany(() => Post, (post) => post.residents)
  posts: Post[];
}

@InputType()
export class ResidentInput implements Partial<Resident> {
  @Field()
  id: number;
}
