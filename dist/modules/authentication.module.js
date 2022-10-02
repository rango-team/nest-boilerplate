"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const authentication_processor_1 = __importDefault(require("../processors/authentication.processor"));
const authentication_resolver_1 = __importDefault(require("../resolvers/authentication.resolver"));
const authentication_service_1 = __importDefault(require("../services/authentication.service"));
const prisma_service_1 = __importDefault(require("../services/prisma.service"));
let AuthenticationModule = class AuthenticationModule {
};
AuthenticationModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [prisma_service_1.default, authentication_resolver_1.default, authentication_service_1.default, authentication_processor_1.default]
    })
], AuthenticationModule);
exports.default = AuthenticationModule;
//# sourceMappingURL=authentication.module.js.map