import User from 'entity/user.entity';
import AuthenticationService from 'services/authentication.service';
declare class AuthenticationResolver {
    private readonly authenticationService;
    constructor(authenticationService: AuthenticationService);
    user(user: User): Promise<User>;
}
export default AuthenticationResolver;
