import { Field, InputType, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Comment } from "./Comment";
import { Resident, ResidentInput } from "./Resident";

@ObjectType()
@Entity()
export class Post extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => [Resident], { nullable: true })
  @ManyToMany(() => Resident, (resident) => resident.posts)
  @JoinTable()
  residents: Resident[];

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
  @Field(() => [ResidentInput], { nullable: true })
  residents: Resident[];
  id: number;

  @Field()
  titre: string;

  @Field()
  photo: string;
}
