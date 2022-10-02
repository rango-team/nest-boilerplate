import User from 'entity/user.entity';
import PrismaService from 'services/prisma.service';
declare class UserProcessor {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    existsById(id: string): Promise<User>;
    notExistsById(id: string): Promise<User>;
    existsByRegister(register: string): Promise<User>;
    notExistsByRegister(register: string): Promise<User>;
}
export default UserProcessor;
