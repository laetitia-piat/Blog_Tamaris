import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { Resident } from "./Resident";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ nullable: true })
  userName: string;

  @Field()
  @Column({ nullable: true })
  hashedPassword: string;

  @Field(() => Resident, { nullable: true })
  @ManyToOne(() => Resident, (resident) => resident.users, { nullable: true })
  @JoinColumn()
  resident?: Resident;

  @Field()
  @Column({ default: "USER" })
  role: string;
}
