export interface User {
    id: number;
    name: string;
    surname: string;
    roleId: number;
    email: string;
    password: string;
}

export type UserSignInClient = Pick<User, 'email' | 'password' | 'roleId'>
export type UserStoreClient = Pick<User, 'id' | 'email' | 'roleId' | 'name' | 'surname'> & {
    isLogin: boolean;
};
