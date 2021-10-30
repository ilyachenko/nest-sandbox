import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
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

export enum ArticleStatus {
    DRAFT = 'DRAFT',
    PUBLISHED = 'PUBLISHED',
}
