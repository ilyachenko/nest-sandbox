import { Module } from '@nestjs/common';
import { ArticlesModule } from './articles/articles.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
    imports: [
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
