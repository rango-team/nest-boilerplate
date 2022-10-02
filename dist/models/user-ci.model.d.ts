import UserUI from './user-ui.model';
declare const UserCI_base: import("@nestjs/common").Type<Omit<UserUI, "id">>;
declare class UserCI extends UserCI_base {
    authenticationId: string;
}
export default UserCI;
