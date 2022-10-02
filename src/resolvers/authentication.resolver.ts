import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import Authentication from 'entity/authentication.entity';
import User from 'entity/user.entity';
import AuthenticationService from 'services/authentication.service';

@Resolver((of) => Authentication)
class AuthenticationResolver {
    constructor(private readonly authenticationService: AuthenticationService) {}

    @ResolveField((of) => User)
    public async user(@Parent() user: User): Promise<User> {
        return this.authenticationService.findUserByAuthenticationId(user.authenticationId);
    }
}

export default AuthenticationResolver;
