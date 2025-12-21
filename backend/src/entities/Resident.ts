import { Field, InputType, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Post } from "./Post";
import { User } from "./User";

@ObjectType()
@Entity()
export class Resident extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name?: string;

  @Field(() => [Post])
  @ManyToMany(() => Post, (post) => post.residents)
  posts: Post[];

  @Field()
  @Column({ default: false })
  isPhotoSharingAllowed: boolean;

  @Field(() => [User])
  @OneToMany(() => User, (user) => user.resident)
  users: User[];
}

@InputType()
export class ResidentInput implements Partial<Resident> {
  @Field()
  id: number;
}
