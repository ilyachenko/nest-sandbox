import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Article, ArticleStatus } from './article.entity';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { CreateArticleInput } from './article.input';

@Injectable()
export class ArticlesService {
    constructor(
        @InjectRepository(Article)
        private articleRepository: Repository<Article>,
    ) {}

    addArticle(createArticleInput: CreateArticleInput): Promise<Article> {
        const { title, content } = createArticleInput;
        const article = this.articleRepository.create({
            id: uuidv4(),
            title,
            content,
            status: ArticleStatus.DRAFT,
        });
        return this.articleRepository.save(article);
    }

    articles(): Promise<Article[]> {
        return this.articleRepository.find();
    }

    async getArticleById(id: string): Promise<Article> {
        return this.articleRepository.findOne({ id });
    }

    async deleteArticle(id: string): Promise<DeleteResult> {
        return this.articleRepository.delete({ id });
    }

    async updateArticle(
        id: string,
        createArticleInput: CreateArticleInput,
    ): Promise<Article> {
        const article = await this.getArticleById(id);
        return this.articleRepository.save({
            ...article,
            ...createArticleInput,
        });
    }

    async publishArticle(id: string): Promise<Article> {
        const article = await this.getArticleById(id);
        return this.articleRepository.save({
            ...article,
            status: ArticleStatus.PUBLISHED,
        });
        return article;
    }
}
