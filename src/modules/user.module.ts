import { Module } from '@nestjs/common';
import UserProcessor from 'processors/user.processor';
import UserResolver from 'resolvers/user.resolver';
import PrismaService from 'services/prisma.service';
import UserService from 'services/user.service';

@Module({
    imports: [],
    providers: [PrismaService, UserResolver, UserService, UserProcessor]
})
class UserModule {}

export default UserModule;
