import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleResolver } from './article.resolver';
import { ArticlesService } from './articles.service';
import { ArticleEntity } from './article.entity';
@Module({
    imports: [TypeOrmModule.forFeature([ArticleEntity])],
    providers: [ArticlesService, ArticleResolver],
})
export class ArticlesModule {}
