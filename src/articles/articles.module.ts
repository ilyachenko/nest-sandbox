import { Module } from '@nestjs/common';
import { ArticlesController } from './articles/articles.controller';

@Module({
  controllers: [ArticlesController]
})
export class ArticlesModule {}
