import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieDetails } from "../../types/types";
import { FavoritesState } from "../../types/types";
import { STORAGE_KEYS } from '../../constants/storageKeys';

const initialState: FavoritesState = {
  favorites: JSON.parse(localStorage.getItem(STORAGE_KEYS.FAVORITES) || "[]") || [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavoriteMovie: (
      _,
      { payload }: PayloadAction<{ userName: string; movie: MovieDetails }>
    ) => {
      const { movie, userName } = payload;

        const userPrefix = `${STORAGE_KEYS.FAVORITES}_${userName}`;
      const currentUserMovies = JSON.parse(
        localStorage.getItem(userPrefix) || "[]"
      );
      const movieExists = currentUserMovies.some(
        ({ id }: { id: string }) => id === movie.id
      );

      if (!movieExists) {
        localStorage.setItem(
          userPrefix,
          JSON.stringify(currentUserMovies.concat(movie))
        );
      }
    },

    removeFavoriteMovie: (
      _,
      {
        payload,
      }: PayloadAction<Pick<MovieDetails, "id"> & { userName: string }>
    ) => {
      const { userName } = payload;
      const userPrefix = `${STORAGE_KEYS.FAVORITES}_${userName}`;
      const currentUserMovies = JSON.parse(
        localStorage.getItem(userPrefix) || "[]"
      );
      localStorage.setItem(
        userPrefix,
        JSON.stringify(
          currentUserMovies.filter(
            ({ id }: { id: string }) => id !== payload.id
          )
        )
      );
    },

    removeAllFavorites: (  _,
      { payload }: PayloadAction<{ userName: string }>
    ) => {
      const userPrefix = `${STORAGE_KEYS.FAVORITES}_${payload.userName}`;
      localStorage.setItem(userPrefix, JSON.stringify([]));
    },
  },
});

export const { addFavoriteMovie, removeFavoriteMovie, removeAllFavorites } =
  favoritesSlice.actions;

export const selectFavorites = (state: { favorites: FavoritesState }) =>
  state.favorites.favorites;

export default favoritesSlice.reducer;
