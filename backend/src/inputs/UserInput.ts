import { User } from "src/entities/User";
import { InputType, Field, Int } from "type-graphql";
import { Column } from "typeorm";

@InputType()
export class UserInput implements Partial<User> {
  @Field()
  userName: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  residentId?: number;

  @Field()
  @Column({ default: "USER" })
  role: string;
}

@InputType()
export class LoginUserInput implements Partial<User> {
  @Field()
  userName: string;

  @Field()
  password: string;
}

@InputType()
export class DeleteUserInput {
  @Field()
  userId!: number;
}

@InputType()
export class UpdateUserInput {
  @Field(() => Int)
  userId: number;

  @Field({ nullable: true })
  userName?: string;

  @Field({ nullable: true })
  password?: string;

  @Field({ nullable: true })
  role?: string;

  @Field(() => Int, { nullable: true })
  residentId?: number;
}
