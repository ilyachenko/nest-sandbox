import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesService } from './articles.service';
import { ArticleStatus } from './articles.model';

const id = '00000000-0000-0000-0000-000000000000';

jest.mock('uuid', () => ({
    v4: () => id,
}));

describe('ArticlesService', () => {
    let service: ArticlesService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ArticlesService],
        }).compile();

        service = module.get<ArticlesService>(ArticlesService);
    });

    function addArticle() {
        service.addArticle('Article title', 'Content');
    }

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should get all articles', () => {
        expect(service.getAllArticles()).toEqual([]);
    });

    it('should add new article', () => {
        let articles = service.getAllArticles();
        expect(articles.length).toEqual(0);
        addArticle();
        articles = service.getAllArticles();
        expect(articles.length).toEqual(1);
        expect(articles[0]).toEqual({
            id,
            title: 'Article title',
            content: 'Content',
            status: ArticleStatus.DRAFT,
        });
    });

    it('should update article by id', () => {
        addArticle();
        const updateArticle = {
            title: 'Updated article title',
            content: 'Updated Content',
        };
        expect(
            service.updateArticle(
                id,
                updateArticle.title,
                updateArticle.content,
            ),
        ).toEqual({
            id,
            ...updateArticle,
            status: ArticleStatus.DRAFT,
        });
    });

    it('should publish article by id', () => {
        addArticle();
        service.publishArticle(id);
        const articles = service.getAllArticles();
        expect(articles[0].status).toEqual(ArticleStatus.PUBLISHED);
    });

    it('should remove article by id', () => {
        addArticle();
        service.deleteArticle(id);
        const articles = service.getAllArticles();
        expect(articles).toEqual([]);
    });
});
