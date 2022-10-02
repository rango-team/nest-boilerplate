import { Injectable } from '@nestjs/common';
import { AuthenticationNotFound } from '@rango-team/exceptions';
import User from 'entity/user.entity';
import PrismaService from 'services/prisma.service';

@Injectable()
class AuthenticationProcessor {
    constructor(private readonly prismaService: PrismaService) {}

    async notExistsUserByAuthenticationId(id: string): Promise<User> {
        const authentication = await this.prismaService.user.findFirst({
            where: {
                authenticationId: id,
                deletedAt: null
            }
        });

        if (!authentication) {
            throw new AuthenticationNotFound();
        }

        return authentication;
    }
}

export default AuthenticationProcessor;
