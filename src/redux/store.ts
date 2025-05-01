import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slices/usersSlice";
import searchTextSlice from "./slices/searchTextSlice";
import historySlice from "./slices/historySlice";
import moviesSlice from "./slices/moviesListSlice";
import favoritesReducer from "./slices/favoritesSlice";
import { searchTextMiddleware } from "./middleware/searchTextMiddleware"; 

const store = configureStore({
  reducer: {
    searchText: searchTextSlice,
    users: usersSlice,
    history: historySlice,
    movies: moviesSlice,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(searchTextMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;