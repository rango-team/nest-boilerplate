import { Gender } from '@prisma/client';
declare class UserUI {
    id: string;
    register?: string;
    name: string;
    cell?: string;
    birth?: Date;
    gender: Gender;
}
export default UserUI;
