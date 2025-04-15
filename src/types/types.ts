export type TNewUser = {
    username: string;
    password: string;
};

export interface UsersState {
    activeUser: string;
    users: TNewUser[];
    error: string;
}