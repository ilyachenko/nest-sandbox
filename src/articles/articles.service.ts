import { Injectable } from '@nestjs/common';
import { Article, ArticleStatus } from './articles.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ArticlesService {
    private articles: Article[] = [];

    getArticleById(id: string): Article {
        return this.articles.find((article: Article) => article.id === id);
    }

    getAllArticles(): Article[] {
        return this.articles;
    }

    addArticle(title: string, content: string): Article {
        const articleToAdd = {
            id: uuidv4(),
            title,
            content,
            status: ArticleStatus.DRAFT,
        };
        this.articles = [...this.articles, articleToAdd];
        return articleToAdd;
    }

    deleteArticle(id: string): void {
        this.articles = this.articles.filter((article) => article.id !== id);
    }

    updateArticle(id: string, title: string, content: string): Article {
        const article = this.getArticleById(id);
        article.title = title;
        article.content = content;
        article.status = ArticleStatus.DRAFT;
        return article;
    }

    publishArticle(id: string): Article {
        const article = this.getArticleById(id);
        article.status = ArticleStatus.PUBLISHED;
        return article;
    }
}
