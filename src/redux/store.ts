import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './slices/usersSlice';
import searchTextSlice from './slices/searchTextSlice';
import userSlice from './slices/userSlice';

const store = configureStore({
    reducer: {
        searchText: searchTextSlice,
        users: usersSlice,
        user: userSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;

export default store;