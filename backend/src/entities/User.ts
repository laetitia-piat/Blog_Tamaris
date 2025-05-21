import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Field, InputType, ObjectType } from "type-graphql";
import { Resident } from "./Resident";

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

  @Field(() => Resident)
  @ManyToOne(() => Resident, (resident) => resident.users, { nullable: true })
  @JoinColumn()
  resident?: Resident;

  @Field()
  @Column({ default: "USER" })
  role: string;
}

@InputType()
export class UserInput implements Partial<User> {
  @Field()
  email: string;

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
  email: string;

  @Field()
  password: string;
}
