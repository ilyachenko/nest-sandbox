import { Module } from '@nestjs/common';
import { ArticleResolver } from './article.resolver';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
@Module({
    controllers: [ArticlesController],
    providers: [ArticlesService, ArticleResolver],
})
export class ArticlesModule {}
