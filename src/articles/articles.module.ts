import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleResolver } from './article.resolver';
import { ArticlesService } from './articles.service';
import { Article } from './article.entity';
@Module({
    imports: [TypeOrmModule.forFeature([Article])],
    providers: [ArticlesService, ArticleResolver],
})
export class ArticlesModule {}
