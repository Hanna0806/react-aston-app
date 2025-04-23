import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieDetails } from "../../types/types";
import { FavoritesState } from "../../types/types";

const initialState: FavoritesState = {
  favorites: JSON.parse(localStorage.getItem("favorites") || "[]") || [],
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
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },

    removeFavoriteMovie: (
      state,
      action: PayloadAction<Pick<MovieDetails, "id">>
    ) => {
      state.favorites = state.favorites.filter(
        (movie) => movie.id !== action.payload.id
      );
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },

    removeAllFavorites: (state) => {
      state.favorites = [];
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export const { addFavoriteMovie, removeFavoriteMovie, removeAllFavorites } =
  favoritesSlice.actions;

export const selectFavorites = (state: { favorites: FavoritesState }) =>
  state.favorites.favorites;

export default favoritesSlice.reducer;
