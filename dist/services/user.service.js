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
const user_processor_1 = __importDefault(require("../processors/user.processor"));
const prisma_service_1 = __importDefault(require("./prisma.service"));
let UserService = class UserService {
    prismaService;
    userProcessor;
    constructor(prismaService, userProcessor) {
        this.prismaService = prismaService;
        this.userProcessor = userProcessor;
    }
    async findAll() {
        return this.prismaService.user.findMany();
    }
    async findById(id) {
        return this.userProcessor.notExistsById(id);
    }
    async findByRegister(register) {
        return this.userProcessor.notExistsByRegister(register);
    }
    async create(user) {
        if (user.register) {
            await this.userProcessor.existsByRegister(user.register);
        }
        return this.prismaService.user.create({
            data: {
                authenticationId: user.authenticationId,
                name: user.name,
                cell: user.cell,
                birth: user.birth,
                gender: user.gender,
                register: user.register
            }
        });
    }
    async update(user) {
        await this.userProcessor.notExistsById(user.id);
        if (user.register) {
            await this.userProcessor.notExistsByRegister(user.register);
        }
        return this.prismaService.user.update({
            where: { id: user.id },
            data: {
                name: user.name,
                cell: user.cell,
                birth: user.birth,
                gender: user.gender,
                updatedAt: new Date()
            }
        });
    }
    async remove(id) {
        return this.prismaService.user.update({
            where: { id },
            data: {
                deletedAt: new Date()
            }
        });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.default, user_processor_1.default])
], UserService);
exports.default = UserService;
//# sourceMappingURL=user.service.js.map