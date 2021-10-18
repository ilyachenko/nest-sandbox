import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ArticleType } from './article.type';
import { ArticlesService } from './articles.service';

@Resolver((of) => ArticleType)
export class ArticleResolver {
    constructor(private articleService: ArticlesService) {}

    @Query((returns) => ArticleType)
    article(@Args('id') id: string) {
        return this.articleService.getArticleById(id);
    }

    @Mutation((returns) => ArticleType)
    createArticle(
        @Args('title') title: string,
        @Args('content') content: string,
    ) {
        return this.articleService.addArticle(title, content);
    }
}
