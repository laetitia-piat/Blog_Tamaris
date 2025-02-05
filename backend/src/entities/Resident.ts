import { Field, InputType, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Resident extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  prénom: string;
}

@InputType()
export class ResidentInput implements Partial<Resident> {
  @Field()
  prénom: string;
}
