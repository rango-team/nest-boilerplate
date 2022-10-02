import User from 'entity/user.entity';
import AuthenticationProcessor from 'processors/authentication.processor';
declare class AuthenticationService {
    private readonly authenticationProcessor;
    constructor(authenticationProcessor: AuthenticationProcessor);
    findUserByAuthenticationId(id: string): Promise<User>;
}
export default AuthenticationService;
