import { Module } from '@nestjs/common';
import { ArticlesModule } from './articles/articles.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleEntity } from './articles/article.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mongodb',
            url: 'mongodb://localhost/nest-blog',
            synchronize: true,
            useUnifiedTopology: true,
            entities: [ArticleEntity],
        }),
        MongooseModule.forRoot('mongodb://localhost/nest-blog'),
        GraphQLModule.forRoot({
            autoSchemaFile: true,
        }),
        ArticlesModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
