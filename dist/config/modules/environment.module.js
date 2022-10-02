"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const EnvironmentModule = config_1.ConfigModule.forRoot({
    envFilePath: `.env.${process.env.NODE_ENV}`
});
exports.default = EnvironmentModule;
//# sourceMappingURL=environment.module.js.map