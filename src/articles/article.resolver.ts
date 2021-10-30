import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateArticleInput } from './article.input';
import { ArticleType } from './article.type';
import { ArticlesService } from './articles.service';

@Resolver((of) => ArticleType)
export class ArticleResolver {
    constructor(private articleService: ArticlesService) {}

    @Query(() => ArticleType)
    article(@Args('id') id: string) {
        return this.articleService.getArticleById(id);
    }

    @Query(() => [ArticleType])
    articles() {
        return this.articleService.articles();
    }

    @Mutation(() => ArticleType)
    createArticle(
        @Args('createArticleInput') createArticleInput: CreateArticleInput,
    ) {
        return this.articleService.addArticle(createArticleInput);
    }

    @Mutation(() => ArticleType)
    updateArticle(
        @Args('id') id: string,
        @Args('createArticleInput') createArticleInput: CreateArticleInput,
    ) {
        return this.articleService.updateArticle(id, createArticleInput);
    }

    @Mutation(() => Boolean)
    async deleteArticle(@Args('id') id: string) {
        const res = await this.articleService.deleteArticle(id);
        return !!res.affected;
    }

    @Mutation(() => ArticleType)
    publishArticle(@Args('id') id: string) {
        return this.articleService.publishArticle(id);
    }
}
