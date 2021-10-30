import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
@Entity()
@ObjectType()
export class Article {
    @ObjectIdColumn()
    _id: string;

    @Field((type) => ID)
    @PrimaryColumn()
    id: string;

    @Field()
    @Column()
    title: string;

    @Field()
    @Column()
    content: string;

    @Field()
    @Column()
    status: ArticleStatus;

    @Field()
    @Column()
    date: string;
}

export enum ArticleStatus {
    DRAFT = 'DRAFT',
    PUBLISHED = 'PUBLISHED',
}
