"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = __importDefault(require("./modules/app.module"));
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.default);
    await app.listen(process.env.PORT, () => common_1.Logger.log(`The server was started in ${process.env.PORT}`));
}
bootstrap();
//# sourceMappingURL=main.js.map