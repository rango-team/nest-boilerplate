import { Field, ID, InputType, registerEnumType } from '@nestjs/graphql';
import { Gender } from '@prisma/client';
import { IsCellphone, IsRegister, IsString } from '@rango-team/validations';
import { IsUUID } from 'class-validator';

registerEnumType(Gender, {
    name: 'Gender'
});

@InputType()
class UserUI {
    @Field((type) => ID)
    @IsUUID()
    id: string;

    @Field((type) => String, { nullable: true })
    @IsRegister()
    register?: string;

    @Field((type) => String)
    @IsString()
    name: string;

    @Field((type) => String, { nullable: true })
    @IsCellphone()
    cell?: string;

    @Field((type) => Date, { nullable: true })
    birth?: Date;

    @Field((type) => Gender)
    gender: Gender;
}

export default UserUI;
