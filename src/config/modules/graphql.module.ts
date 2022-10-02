import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { GraphQLModule as NestGraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginInlineTraceDisabled, ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

const GraphQLModule = NestGraphQLModule.forRoot<ApolloFederationDriverConfig>({
    playground: false,
    autoSchemaFile: true,
    driver: ApolloFederationDriver,
    plugins: [ApolloServerPluginLandingPageLocalDefault(), ApolloServerPluginInlineTraceDisabled()]
});

export default GraphQLModule;
