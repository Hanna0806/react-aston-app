import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './slices/usersSlice';
import searchTextSlice from './slices/searchTextSlice';
import historySlice from './slices/historySlice';

const store = configureStore({
    reducer: {
        searchText: searchTextSlice,
        users: usersSlice,
        history: historySlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;

export default store;