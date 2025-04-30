import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slices/usersSlice";
import searchTextSlice from "./slices/searchTextSlice";
import historySlice from "./slices/historySlice";
import moviesSlice from "./slices/moviesListSlice";
import favoritesReducer from "./slices/favoritesSlice";

const store = configureStore({
  reducer: {
    searchText: searchTextSlice,
    users: usersSlice,
    history: historySlice,
    movies: moviesSlice,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
