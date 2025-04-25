import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieDetails } from "../../types/types";
import { FavoritesState } from "../../types/types";
import { STORAGE_KEYS } from '../../constants/storageKeys'

const initialState: FavoritesState = {
  favorites: JSON.parse(localStorage.getItem(STORAGE_KEYS.FAVORITES) || "[]") || [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavoriteMovie: (state, action: PayloadAction<MovieDetails>) => {
      const movieExists = state.favorites.some(
        (movie) => movie.id === action.payload.id
      );
      if (!movieExists) {
        state.favorites.push(action.payload);
        localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(state.favorites));
      }
    },

    removeFavoriteMovie: (
      state,
      action: PayloadAction<Pick<MovieDetails, "id">>
    ) => {
      state.favorites = state.favorites.filter(
        (movie) => movie.id !== action.payload.id
      );
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(state.favorites));
    },

    removeAllFavorites: (state) => {
      state.favorites = [];
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(state.favorites));
    },
  },
});

export const { addFavoriteMovie, removeFavoriteMovie, removeAllFavorites } =
  favoritesSlice.actions;

export const selectFavorites = (state: { favorites: FavoritesState }) =>
  state.favorites.favorites;

export default favoritesSlice.reducer;
