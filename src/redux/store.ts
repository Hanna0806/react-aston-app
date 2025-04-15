import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './slices/usersSlice';

const store = configureStore({
    reducer: {
        users: usersSlice
    }
})

export type IRootState = ReturnType<typeof store.getState>;

export default store;