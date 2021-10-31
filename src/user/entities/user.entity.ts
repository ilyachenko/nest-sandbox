import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
    @ObjectIdColumn()
    _id: string;

    @Column()
    @Field(() => ID)
    id!: string;

    @Column()
    @Field({ description: 'User`s name' })
    name!: string;
}
