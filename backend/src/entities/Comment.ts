import { Field, ID, InputType, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Post } from "./Post";

@ObjectType()
@Entity()
export class Comment extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  content: string;

  @Field()
  @Column()
  author: string;

  @Field(() => Post)
  @ManyToOne(() => Post, (post) => post.comments)
  post: Post;
}

@InputType()
export class CommentInput implements Partial<Comment> {
  @Field()
  content: string;

  @Field()
  author: string;

  @Field(() => ID)
  post: Post;
}
