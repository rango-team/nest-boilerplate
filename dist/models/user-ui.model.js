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
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const validations_1 = require("@rango-team/validations");
const class_validator_1 = require("class-validator");
(0, graphql_1.registerEnumType)(client_1.Gender, {
    name: 'Gender'
});
let UserUI = class UserUI {
    id;
    register;
    name;
    cell;
    birth;
    gender;
};
__decorate([
    (0, graphql_1.Field)((type) => graphql_1.ID),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UserUI.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String, { nullable: true }),
    (0, validations_1.IsRegister)(),
    __metadata("design:type", String)
], UserUI.prototype, "register", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String),
    (0, validations_1.IsString)(),
    __metadata("design:type", String)
], UserUI.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String, { nullable: true }),
    (0, validations_1.IsCellphone)(),
    __metadata("design:type", String)
], UserUI.prototype, "cell", void 0);
__decorate([
    (0, graphql_1.Field)((type) => Date, { nullable: true }),
    __metadata("design:type", Date)
], UserUI.prototype, "birth", void 0);
__decorate([
    (0, graphql_1.Field)((type) => client_1.Gender),
    __metadata("design:type", String)
], UserUI.prototype, "gender", void 0);
UserUI = __decorate([
    (0, graphql_1.InputType)()
], UserUI);
exports.default = UserUI;
//# sourceMappingURL=user-ui.model.js.map