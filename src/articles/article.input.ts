import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';
@InputType()
export class CreateArticleInput {
    @MinLength(3)
    @Field()
    title: string;

    @Field()
    content: string;
}
