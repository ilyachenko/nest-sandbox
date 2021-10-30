import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateArticleInput } from './article.input';
import { Article } from './article.type';
import { ArticlesService } from './articles.service';

@Resolver((of) => Article)
export class ArticleResolver {
    constructor(private articleService: ArticlesService) {}

    @Query(() => Article)
    article(@Args('id') id: string) {
        return this.articleService.getArticleById(id);
    }

    @Query(() => [Article])
    articles() {
        return this.articleService.articles();
    }

    @Mutation(() => Article)
    createArticle(
        @Args('createArticleInput') createArticleInput: CreateArticleInput,
    ) {
        return this.articleService.addArticle(createArticleInput);
    }

    @Mutation(() => Article)
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

    @Mutation(() => Article)
    publishArticle(@Args('id') id: string) {
        return this.articleService.publishArticle(id);
    }
}
