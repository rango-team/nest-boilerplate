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
const environment_module_1 = __importDefault(require("../config/modules/environment.module"));
const graphql_module_1 = __importDefault(require("../config/modules/graphql.module"));
const authentication_module_1 = __importDefault(require("./authentication.module"));
const user_module_1 = __importDefault(require("./user.module"));
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [environment_module_1.default, graphql_module_1.default, authentication_module_1.default, user_module_1.default],
        providers: []
    })
], AppModule);
exports.default = AppModule;
//# sourceMappingURL=app.module.js.map