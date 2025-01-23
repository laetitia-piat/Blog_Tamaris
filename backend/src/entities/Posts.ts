import { Field, InputType, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Posts extends BaseEntity {
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
}

@InputType()
export class PostInput implements Partial<Posts> {
  @Field()
  resident: string;

  @Field()
  titre: string;

  @Field()
  photo: string;
}
