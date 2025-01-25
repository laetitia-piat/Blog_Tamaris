import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Field, InputType, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ nullable: true })
  email: string;

  @Field()
  @Column({ nullable: true })
  hashedPassword: string;

  @Field()
  @Column({ default: "USER", nullable: true })
  resident: string;
}

@InputType()
export class UserInput implements Partial<User> {
  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  resident: string;
}
