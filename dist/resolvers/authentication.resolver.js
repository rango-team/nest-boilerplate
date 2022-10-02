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
const authentication_service_1 = __importDefault(require("../services/authentication.service"));
let AuthenticationResolver = class AuthenticationResolver {
    authenticationService;
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    async user(user) {
        return this.authenticationService.findUserByAuthenticationId(user.authenticationId);
    }
};
__decorate([
    (0, graphql_1.ResolveField)((of) => user_entity_1.default),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.default]),
    __metadata("design:returntype", Promise)
], AuthenticationResolver.prototype, "user", null);
AuthenticationResolver = __decorate([
    (0, graphql_1.Resolver)((of) => authentication_entity_1.default),
    __metadata("design:paramtypes", [authentication_service_1.default])
], AuthenticationResolver);
exports.default = AuthenticationResolver;
//# sourceMappingURL=authentication.resolver.js.map