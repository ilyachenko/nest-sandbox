import { Module } from '@nestjs/common';
import { ArticlesController } from './articles/articles.controller';
import { ArticlesService } from './articles/articles.service';
@Module({
    controllers: [ArticlesController],
    providers: [ArticlesService],
})
export class ArticlesModule {}
