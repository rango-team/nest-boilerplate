import User from 'entity/user.entity';
import PrismaService from 'services/prisma.service';
declare class AuthenticationProcessor {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    notExistsUserByAuthenticationId(id: string): Promise<User>;
}
export default AuthenticationProcessor;
