import User from 'entity/user.entity';
import UserCI from 'models/user-ci.model';
import UserUI from 'models/user-ui.model';
import UserService from 'services/user.service';
import Reference from 'types/reference.type';
declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<User[]>;
    findById(id: string): Promise<User>;
    findByRegister(register: string): Promise<User>;
    create(user: UserCI): Promise<User>;
    update(user: UserUI): Promise<User>;
    remove(id: string): Promise<User>;
    authentication(user: User): Reference;
    resolveReference({ id }: Reference): Promise<User>;
}
export default UserResolver;
