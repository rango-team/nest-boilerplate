import { Injectable } from '@nestjs/common';
import { UserAlreadyExists, UserNotFound } from '@rango-team/exceptions';
import User from 'entity/user.entity';
import PrismaService from 'services/prisma.service';

@Injectable()
class UserProcessor {
    constructor(private readonly prismaService: PrismaService) {}

    async existsById(id: string): Promise<User> {
        const user = await this.prismaService.user.findFirst({
            where: {
                id,
                deletedAt: null
            }
        });

        if (user) {
            throw new UserAlreadyExists();
        }

        return user;
    }

    async notExistsById(id: string): Promise<User> {
        const user = await this.prismaService.user.findFirst({
            where: {
                id,
                deletedAt: null
            }
        });

        if (!user) {
            throw new UserNotFound();
        }

        return user;
    }

    async existsByRegister(register: string): Promise<User> {
        const user = await this.prismaService.user.findFirst({
            where: {
                register,
                deletedAt: null
            }
        });

        if (user) {
            throw new UserAlreadyExists();
        }

        return user;
    }

    async notExistsByRegister(register: string): Promise<User> {
        const user = await this.prismaService.user.findFirst({
            where: {
                register,
                deletedAt: null
            }
        });

        if (!user) {
            throw new UserNotFound();
        }

        return user;
    }
}

export default UserProcessor;
