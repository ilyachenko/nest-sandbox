import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Article } from './articles.model';
import { CreateArticleDto } from './dto/create-article.dto';

@Controller('articles')
export class ArticlesController {
    @Get()
    getArticles(): Article[] {
        return [];
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string) {
        return id;
    }

    @Post()
    createTask(@Body() createArticleDto: CreateArticleDto) {
        return [];
    }
}
