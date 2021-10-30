import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ArticleStatus } from './article.entity';

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
