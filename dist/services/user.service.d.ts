import User from 'entity/user.entity';
import UserCI from 'models/user-ci.model';
import UserUI from 'models/user-ui.model';
import UserProcessor from 'processors/user.processor';
import PrismaService from './prisma.service';
declare class UserService {
    private readonly prismaService;
    private readonly userProcessor;
    constructor(prismaService: PrismaService, userProcessor: UserProcessor);
    findAll(): Promise<User[]>;
    findById(id: string): Promise<User>;
    findByRegister(register: string): Promise<User>;
    create(user: UserCI): Promise<User>;
    update(user: UserUI): Promise<User>;
    remove(id: string): Promise<User>;
}
export default UserService;
