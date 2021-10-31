import { Module } from '@nestjs/common';
import { ArticlesModule } from './articles/articles.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './articles/article.entity';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mongodb',
            url: 'mongodb://localhost/nest-blog',
            synchronize: true,
            useUnifiedTopology: true,
            entities: [Article, User],
        }),
        MongooseModule.forRoot('mongodb://localhost/nest-blog'),
        GraphQLModule.forRoot({
            autoSchemaFile: true,
        }),
        ArticlesModule,
        UserModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
