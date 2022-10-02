import { Injectable } from '@nestjs/common';
import User from 'entity/user.entity';
import UserCI from 'models/user-ci.model';
import UserUI from 'models/user-ui.model';
import UserProcessor from 'processors/user.processor';
import PrismaService from './prisma.service';

@Injectable()
class UserService {
    constructor(private readonly prismaService: PrismaService, private readonly userProcessor: UserProcessor) {}

    async findAll(): Promise<User[]> {
        return this.prismaService.user.findMany();
    }

    async findById(id: string): Promise<User> {
        return this.userProcessor.notExistsById(id);
    }

    async findByRegister(register: string): Promise<User> {
        return this.userProcessor.notExistsByRegister(register);
    }

    async create(user: UserCI): Promise<User> {
        if (user.register) {
            await this.userProcessor.existsByRegister(user.register);
        }

        return this.prismaService.user.create({
            data: {
                authenticationId: user.authenticationId,
                name: user.name,
                cell: user.cell,
                birth: user.birth,
                gender: user.gender,
                register: user.register
            }
        });
    }

    async update(user: UserUI): Promise<User> {
        await this.userProcessor.notExistsById(user.id);

        if (user.register) {
            await this.userProcessor.notExistsByRegister(user.register);
        }

        return this.prismaService.user.update({
            where: { id: user.id },
            data: {
                name: user.name,
                cell: user.cell,
                birth: user.birth,
                gender: user.gender,
                updatedAt: new Date()
            }
        });
    }

    async remove(id: string): Promise<User> {
        return this.prismaService.user.update({
            where: { id },
            data: {
                deletedAt: new Date()
            }
        });
    }
}

export default UserService;
