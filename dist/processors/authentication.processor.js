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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const exceptions_1 = require("@rango-team/exceptions");
const prisma_service_1 = __importDefault(require("../services/prisma.service"));
let AuthenticationProcessor = class AuthenticationProcessor {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async notExistsUserByAuthenticationId(id) {
        const authentication = await this.prismaService.user.findFirst({
            where: {
                authenticationId: id,
                deletedAt: null
            }
        });
        if (!authentication) {
            throw new exceptions_1.AuthenticationNotFound();
        }
        return authentication;
    }
};
AuthenticationProcessor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.default])
], AuthenticationProcessor);
exports.default = AuthenticationProcessor;
//# sourceMappingURL=authentication.processor.js.map