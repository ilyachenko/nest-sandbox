import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Article')
export class ArticleType {
    @Field((type) => ID)
    id: string;

    @Field()
    title: string;

    @Field()
    content: string;

    @Field()
    status: ArticleStatus;

    @Field()
    date: string;
}

export enum ArticleStatus {
    DRAFT = 'DRAFT',
    PUBLISHED = 'PUBLISHED',
}
