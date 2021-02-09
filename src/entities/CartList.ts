import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { Field, ObjectType, Int } from "type-graphql";

@ObjectType()
@Entity("cartlist")
export class CartList extends BaseEntity {
  @Field(() => Int, { nullable: true })
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ nullable: true })
  name: string;

  @Field()
  @Column({ nullable: true })
  user_id: string;

  @Field()
  @Column({ nullable: true })
  url: string;

  @Field()
  @Column({ nullable: true })
  price: string;
  @Field()
  @Column({ nullable: true })
  username: string;
}
