import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleResolver } from './article.resolver';
import { ArticlesService } from './articles.service';
import { Article } from './article.entity';
import { UserModule } from 'src/user/user.module';

@Module({
    imports: [TypeOrmModule.forFeature([Article]), UserModule],
    providers: [ArticlesService, ArticleResolver],
})
export class ArticlesModule {}
