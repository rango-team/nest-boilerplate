import { Gender } from '@prisma/client';
import Authentication from './authentication.entity';
declare class User {
    id: string;
    authenticationId: string;
    authentication?: Authentication;
    register?: string;
    name: string;
    cell?: string;
    birth?: Date;
    gender: Gender;
    createdAt: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
export default User;
