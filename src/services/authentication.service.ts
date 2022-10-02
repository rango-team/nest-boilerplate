import { Injectable } from '@nestjs/common';
import User from 'entity/user.entity';
import AuthenticationProcessor from 'processors/authentication.processor';

@Injectable()
class AuthenticationService {
    constructor(private readonly authenticationProcessor: AuthenticationProcessor) {}

    async findUserByAuthenticationId(id: string): Promise<User> {
        return this.authenticationProcessor.notExistsUserByAuthenticationId(id);
    }
}

export default AuthenticationService;
