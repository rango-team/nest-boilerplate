"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_1 = require("@nestjs/apollo");
const graphql_1 = require("@nestjs/graphql");
const apollo_server_core_1 = require("apollo-server-core");
const GraphQLModule = graphql_1.GraphQLModule.forRoot({
    playground: false,
    autoSchemaFile: true,
    driver: apollo_1.ApolloFederationDriver,
    plugins: [(0, apollo_server_core_1.ApolloServerPluginLandingPageLocalDefault)(), (0, apollo_server_core_1.ApolloServerPluginInlineTraceDisabled)()]
});
exports.default = GraphQLModule;
//# sourceMappingURL=graphql.module.js.map