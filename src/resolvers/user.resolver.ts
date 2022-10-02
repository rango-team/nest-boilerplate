import { Args, Mutation, Parent, Query, ResolveField, Resolver, ResolveReference } from '@nestjs/graphql';
import Authentication from 'entity/authentication.entity';
import User from 'entity/user.entity';
import UserCI from 'models/user-ci.model';
import UserUI from 'models/user-ui.model';
import UserService from 'services/user.service';
import Reference from 'types/reference.type';

@Resolver((of) => User)
class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query((returns) => [User], { name: 'users' })
    async findAll(): Promise<User[]> {
        return this.userService
            .findAll()
            .then((users) => users)
            .catch((error) => {
                throw error;
            });
    }

    @Query((returns) => User, { name: 'userById' })
    async findById(@Args('id') id: string): Promise<User> {
        return this.userService
            .findById(id)
            .then((user) => user)
            .catch((error) => {
                throw error;
            });
    }

    @Query((returns) => User, { name: 'userByRegister' })
    async findByRegister(@Args('register') register: string): Promise<User> {
        return this.userService
            .findByRegister(register)
            .then((user) => user)
            .catch((error) => {
                throw error;
            });
    }

    @Mutation((returns) => User, { name: 'userCreate' })
    async create(@Args('user') user: UserCI): Promise<User> {
        return this.userService
            .create(user)
            .then((createdUser) => createdUser)
            .catch((error) => {
                throw error;
            });
    }

    @Mutation((returns) => User, { name: 'userUpdate' })
    async update(@Args('user') user: UserUI): Promise<User> {
        return this.userService
            .update(user)
            .then((updatedUser) => updatedUser)
            .catch((error) => {
                throw error;
            });
    }

    @Mutation((returns) => User, { name: 'userRemove' })
    async remove(@Args('id') id: string): Promise<User> {
        return this.userService
            .remove(id)
            .then((removedUser) => removedUser)
            .catch((error) => {
                throw error;
            });
    }

    @ResolveField((of) => Authentication)
    authentication(@Parent() user: User): Reference {
        return { __typename: 'Authentication', id: user.authenticationId };
    }

    @ResolveReference()
    public async resolveReference({ id }: Reference): Promise<User> {
        return this.userService.findById(id);
    }
}

export default UserResolver;
