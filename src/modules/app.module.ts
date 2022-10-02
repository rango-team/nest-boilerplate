import { Module } from '@nestjs/common';
import EnvironmentModule from 'config/modules/environment.module';
import GraphQLModule from 'config/modules/graphql.module';
import AuthenticationModule from './authentication.module';
import UserModule from './user.module';

@Module({
    imports: [EnvironmentModule, GraphQLModule, AuthenticationModule, UserModule],
    providers: []
})
class AppModule {}

export default AppModule;
