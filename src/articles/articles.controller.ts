import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { Article } from './articles.model';
import { CreateArticleDto } from './dto/create-article.dto';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
    constructor(private articlesService: ArticlesService) {}

    @Get()
    getArticles(): Article[] {
        return this.articlesService.getAllArticles();
    }

    @Get('/:id')
    getArticleById(@Param('id') id: string) {
        return this.articlesService.getArticleById(id);
    }

    @Post()
    addArticle(@Body() createArticleDto: CreateArticleDto) {
        return this.articlesService.addArticle(
            createArticleDto.title,
            createArticleDto.content,
        );
    }

    @Delete('/:id')
    deleteArticleById(@Param('id') id: string) {
        return this.articlesService.deleteArticle(id);
    }

    // @Patch('/:id')
    // updateArticle(
    //     @Param('id') id: string,
    //     @Body('title') title: string,
    //     @Body('content') content: string,
    // ) {
    //     return this.articlesService.updateArticle(id, title, content);
    // }

    // @Patch('/publish/:id')
    // publishArticle(@Param('id') id: string) {
    //     return this.articlesService.publishArticle(id);
    // }
}
