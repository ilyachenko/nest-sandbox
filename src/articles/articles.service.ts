import { Injectable, NotFoundException } from '@nestjs/common';
import { Article, ArticleStatus } from './articles.model';
import { v4 as uuidv4 } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleEntity } from './article.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArticlesService {
    constructor(
        @InjectRepository(ArticleEntity)
        private articleRepository: Repository<ArticleEntity>,
    ) {}
    private articles: Article[] = [];

    addArticle(title: string, content: string): Promise<Article> {
        const article = this.articleRepository.create({
            id: uuidv4(),
            title,
            content,
            status: ArticleStatus.DRAFT,
        });
        return this.articleRepository.save(article);
    }

    async getArticleById(id: string): Promise<Article> {
        return this.articleRepository.findOne({ id });
    }

    getAllArticles(): Article[] {
        return this.articles;
    }

    deleteArticle(id: string): void {
        this.articles = this.articles.filter((article) => article.id !== id);
    }

    // updateArticle(id: string, title: string, content: string): Article {
    //     const article = this.getArticleById(id);
    //     article.title = title;
    //     article.content = content;
    //     article.status = ArticleStatus.DRAFT;
    //     return article;
    // }

    // publishArticle(id: string): Article {
    //     const article = this.getArticleById(id);
    //     article.status = ArticleStatus.PUBLISHED;
    //     return article;
    // }
}
