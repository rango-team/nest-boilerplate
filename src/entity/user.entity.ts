import { Directive, Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Gender } from '@prisma/client';
import Authentication from './authentication.entity';

registerEnumType(Gender, {
    name: 'Gender'
});

@ObjectType()
@Directive('@key(fields: "id")')
class User {
    @Field((type) => ID)
    id: string;

    @Field((type) => String)
    authenticationId: string;

    @Field((type) => Authentication)
    authentication?: Authentication;

    @Field((type) => String, { nullable: true })
    register?: string;

    @Field((type) => String)
    name: string;

    @Field((type) => String, { nullable: true })
    cell?: string;

    @Field((type) => Date, { nullable: true })
    birth?: Date;

    @Field((type) => Gender)
    gender: Gender;

    @Field((type) => Date)
    createdAt: Date;

    @Field((type) => Date, { nullable: true })
    updatedAt?: Date;

    @Field((type) => Date, { nullable: true })
    deletedAt?: Date;
}

export default User;
