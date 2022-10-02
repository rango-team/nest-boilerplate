import { Module } from '@nestjs/common';
import AuthenticationProcessor from 'processors/authentication.processor';
import AuthenticationResolver from 'resolvers/authentication.resolver';
import AuthenticationService from 'services/authentication.service';
import PrismaService from 'services/prisma.service';

@Module({
    imports: [],
    providers: [PrismaService, AuthenticationResolver, AuthenticationService, AuthenticationProcessor]
})
class AuthenticationModule {}

export default AuthenticationModule;
