import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import AppModule from 'modules/app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(process.env.PORT, () => Logger.log(`The server was started in ${process.env.PORT}`));
}

bootstrap();
