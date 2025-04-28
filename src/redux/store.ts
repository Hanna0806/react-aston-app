import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './slices/usersSlice';
import searchTextSlice from './slices/searchTextSlice';
import historySlice from './slices/historySlice';
import moviesSlice from './slices/moviesListSlice';
import favoritesReducer from "./slices/favoritesSlice";
import { removeAllFavorites, addFavoriteMovie } from "./slices/favoritesSlice";
import {filterValidMovies} from './../utils/localStorageUtils';
import { STORAGE_KEYS } from './../constants/storageKeys'; 

const store = configureStore({
    reducer: {
        searchText: searchTextSlice,
        users: usersSlice,
        history: historySlice,
        movies: moviesSlice,
        favorites: favoritesReducer
    }
})

window.addEventListener("load", () => {
  try {
    const savedFavorites = localStorage.getItem(STORAGE_KEYS.FAVORITES);
    if (savedFavorites) {
      const parsedData = JSON.parse(savedFavorites);

      if (!Array.isArray(parsedData)) {
        console.warn(
          "Сохраненные данные не являются массивом. Используем пустой массив."
        );
        return;
      }

      const validMovies = filterValidMovies(parsedData);

      if (validMovies.length === 0) {
        console.warn("Нет валидных фильмов в сохраненных данных");
        return;
      }

      store.dispatch(removeAllFavorites());

      validMovies.forEach((movie) => {
        store.dispatch(addFavoriteMovie(movie));
      });
    }
  } catch (error) {
    console.error("Ошибка при загрузке сохраненных фильмов:", error);
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
