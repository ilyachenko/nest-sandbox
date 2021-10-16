import { Query, Resolver } from '@nestjs/graphql';
import { ArticleType } from './article.type';

@Resolver((of) => ArticleType)
export class ArticleResolver {
    @Query((returns) => ArticleType)
    article() {
        return {
            id: 'qwqwe',
            title: 'sss',
            content: 'sdcsdc',
            status: 'DRAFT',
            date: new Date().toISOString(),
        };
    }
}
