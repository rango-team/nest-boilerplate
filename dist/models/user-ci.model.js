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
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const user_ui_model_1 = __importDefault(require("./user-ui.model"));
let UserCI = class UserCI extends (0, graphql_1.OmitType)(user_ui_model_1.default, ['id']) {
    authenticationId;
};
__decorate([
    (0, graphql_1.Field)((type) => String),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UserCI.prototype, "authenticationId", void 0);
UserCI = __decorate([
    (0, graphql_1.InputType)()
], UserCI);
exports.default = UserCI;
//# sourceMappingURL=user-ci.model.js.map