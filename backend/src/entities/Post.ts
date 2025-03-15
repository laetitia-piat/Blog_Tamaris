import { Field, InputType, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Comment } from "./Comment";

@ObjectType()
@Entity()
export class Post extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  resident: string;

  @Field()
  @Column()
  titre: string;

  @Field()
  @Column()
  photo: string;

  @Field(() => [Comment], { nullable: true })
  @OneToMany(() => Comment, (comment) => comment.post, {
    cascade: true,
    eager: true,
  })
  comments: Comment[];
}

@InputType()
export class PostInput implements Partial<Post> {
  @Field()
  resident: string;

  @Field()
  titre: string;

  @Field()
  photo: string;
}
