import { Injectable } from '@nestjs/common';
import { Article, ArticleStatus } from './articles.model';

@Injectable()
export class ArticlesService {
    private articles: Article[] = [];

    getAllArticles(): Article[] {
        return this.articles;
    }

    getArticleById(id: string): Article {
        return this.articles.find((article) => article.id === id);
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
