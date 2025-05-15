import { create } from 'zustand';
import type { UserStoreClient } from '../models/User.ts';

type UserStore = {
    user: UserStoreClient;
    login: (user: UserStoreClient) => void;
    logout: () => void;
};

const userStoreClient = create<UserStore>((set) => ({
    user: {
        id: 0,
        email: '',
        roleId: 0,
        name: '',
        surname: '',
        isLogin: false,
    },

    login: (user) => set({ user }),

    logout: () =>
        set({
            user: {
                id: 0,
                email: '',
                roleId: 0,
                name: '',
                surname: '',
                isLogin: false,
            },
        }),
}));

export { userStoreClient };
