import { Field, InputType, OmitType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';
import UserUI from './user-ui.model';

@InputType()
class UserCI extends OmitType(UserUI, ['id'] as const) {
    @Field((type) => String)
    @IsUUID()
    authenticationId: string;
}

export default UserCI;
