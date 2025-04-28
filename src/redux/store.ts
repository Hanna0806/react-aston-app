import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './slices/usersSlice';
import searchTextSlice from './slices/searchTextSlice';
import historySlice from './slices/historySlice';
import moviesSlice from './slices/moviesListSlice';

const store = configureStore({
    reducer: {
        searchText: searchTextSlice,
        users: usersSlice,
        history: historySlice,
        movies: moviesSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;

export default store;