import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './slices/usersSlice';
import searchTextSlice from './slices/searchTextSlice';

const store = configureStore({
    reducer: {
        searchText: searchTextSlice,
        users: usersSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;

export default store;