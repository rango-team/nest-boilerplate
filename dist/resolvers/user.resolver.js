"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const authentication_entity_1 = __importDefault(require("../entity/authentication.entity"));
const user_entity_1 = __importDefault(require("../entity/user.entity"));
const user_ci_model_1 = __importDefault(require("../models/user-ci.model"));
const user_ui_model_1 = __importDefault(require("../models/user-ui.model"));
const user_service_1 = __importDefault(require("../services/user.service"));
let UserResolver = class UserResolver {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    async findAll() {
        return this.userService
            .findAll()
            .then((users) => users)
            .catch((error) => {
            throw error;
        });
    }
    async findById(id) {
        return this.userService
            .findById(id)
            .then((user) => user)
            .catch((error) => {
            throw error;
        });
    }
    async findByRegister(register) {
        return this.userService
            .findByRegister(register)
            .then((user) => user)
            .catch((error) => {
            throw error;
        });
    }
    async create(user) {
        return this.userService
            .create(user)
            .then((createdUser) => createdUser)
            .catch((error) => {
            throw error;
        });
    }
    async update(user) {
        return this.userService
            .update(user)
            .then((updatedUser) => updatedUser)
            .catch((error) => {
            throw error;
        });
    }
    async remove(id) {
        return this.userService
            .remove(id)
            .then((removedUser) => removedUser)
            .catch((error) => {
            throw error;
        });
    }
    authentication(user) {
        return { __typename: 'Authentication', id: user.authenticationId };
    }
    async resolveReference({ id }) {
        return this.userService.findById(id);
    }
};
__decorate([
    (0, graphql_1.Query)((returns) => [user_entity_1.default], { name: 'users' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)((returns) => user_entity_1.default, { name: 'userById' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "findById", null);
__decorate([
    (0, graphql_1.Query)((returns) => user_entity_1.default, { name: 'userByRegister' }),
    __param(0, (0, graphql_1.Args)('register')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "findByRegister", null);
__decorate([
    (0, graphql_1.Mutation)((returns) => user_entity_1.default, { name: 'userCreate' }),
    __param(0, (0, graphql_1.Args)('user')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_ci_model_1.default]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "create", null);
__decorate([
    (0, graphql_1.Mutation)((returns) => user_entity_1.default, { name: 'userUpdate' }),
    __param(0, (0, graphql_1.Args)('user')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_ui_model_1.default]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "update", null);
__decorate([
    (0, graphql_1.Mutation)((returns) => user_entity_1.default, { name: 'userRemove' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "remove", null);
__decorate([
    (0, graphql_1.ResolveField)((of) => authentication_entity_1.default),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.default]),
    __metadata("design:returntype", Object)
], UserResolver.prototype, "authentication", null);
__decorate([
    (0, graphql_1.ResolveReference)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "resolveReference", null);
UserResolver = __decorate([
    (0, graphql_1.Resolver)((of) => user_entity_1.default),
    __metadata("design:paramtypes", [user_service_1.default])
], UserResolver);
exports.default = UserResolver;
//# sourceMappingURL=user.resolver.js.map