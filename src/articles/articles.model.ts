export interface Article {
    id: string;
    title: string;
    content: string;
    status: ArticleStatus;
}

export enum ArticleStatus {
    DRAFT = 'DRAFT',
    PUBLISHED = 'PUBLISHED',
}
