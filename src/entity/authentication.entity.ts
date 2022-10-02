import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import User from './user.entity';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
class Authentication {
    @Field((type) => ID)
    @Directive('@external')
    id: string;

    @Field((type) => String)
    userId: string;

    @Field((type) => User)
    user?: User;
}

export default Authentication;
