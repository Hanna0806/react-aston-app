import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { STORAGE_KEYS } from '../../constants/storageKeys';
import { TNewUser, UsersState } from '../../types/types';
import { RootState } from '../store';

const initialState: UsersState = {
    activeUser: localStorage.getItem(STORAGE_KEYS.ACTIVE_USER) || '',
    users: JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS) || '[]'),
    error: ''
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addActiveUser: (state, action: PayloadAction<TNewUser>) => {
            const user = action.payload;

            if (state.users.find((userItem) => userItem.username === user.username && userItem.password === user.password)) {
                state.activeUser = user.username;
                localStorage.setItem(STORAGE_KEYS.ACTIVE_USER, user.username);
                state.error = '';
            } else {
                state.error = 'Имя и/или пароль введены неверно'
            }
        },
        addUsers: (state, action: PayloadAction<TNewUser>) => {
            const user = action.payload;

            if (!state.users.find((userItem) => userItem.username === user.username)) {
                state.users.push(user);
                localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(state.users));
                state.activeUser = user.username;
                localStorage.setItem(STORAGE_KEYS.ACTIVE_USER, user.username);
                state.error = '';
            } else {
                state.error = `Пользователь с именем ${user.username} уже существует`
            }
        },
        clearError: (state) => {
            state.error = '';
        },
        deleteActiveUser: (state) => {
            state.activeUser = '';
            localStorage.setItem(STORAGE_KEYS.ACTIVE_USER, '');
        }
    },
});

export const usersSelector = (state: RootState) => state.users;

export const { addActiveUser, addUsers, clearError, deleteActiveUser } = usersSlice.actions;
export default usersSlice.reducer;