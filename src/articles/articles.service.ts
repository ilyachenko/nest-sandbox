import { Injectable } from '@nestjs/common';
import { ArticleStatus } from './article.type';
import { v4 as uuidv4 } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleEntity } from './article.entity';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { CreateArticleInput } from './article.input';

@Injectable()
export class ArticlesService {
    constructor(
        @InjectRepository(ArticleEntity)
        private articleRepository: Repository<ArticleEntity>,
    ) {}

    addArticle(createArticleInput: CreateArticleInput): Promise<ArticleEntity> {
        const { title, content } = createArticleInput;
        const article = this.articleRepository.create({
            id: uuidv4(),
            title,
            content,
            status: ArticleStatus.DRAFT,
        });
        return this.articleRepository.save(article);
    }

    articles(): Promise<ArticleEntity[]> {
        return this.articleRepository.find();
    }

    async getArticleById(id: string): Promise<ArticleEntity> {
        return this.articleRepository.findOne({ id });
    }

    async deleteArticle(id: string): Promise<DeleteResult> {
        return this.articleRepository.delete({ id });
    }

    async updateArticle(
        id: string,
        createArticleInput: CreateArticleInput,
    ): Promise<ArticleEntity> {
        const article = await this.getArticleById(id);
        return this.articleRepository.save({
            ...article,
            ...createArticleInput,
        });
    }

    async publishArticle(id: string): Promise<ArticleEntity> {
        const article = await this.getArticleById(id);
        return this.articleRepository.save({
            ...article,
            status: ArticleStatus.PUBLISHED,
        });
        return article;
    }
}
