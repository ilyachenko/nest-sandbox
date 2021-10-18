import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';
import { ArticleStatus } from './article.type';

@Entity()
export class ArticleEntity {
    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    status: ArticleStatus;

    @Column()
    date: string;
}
