import { ConfigModule } from '@nestjs/config';

const EnvironmentModule = ConfigModule.forRoot({
    envFilePath: `.env.${process.env.NODE_ENV}`
});

export default EnvironmentModule;
