import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieDetails } from '../../hooks/useMovieDetails';

interface FavoritesState {
  favorites: MovieDetails[];
}

const initialState: FavoritesState = {
  favorites: JSON.parse(localStorage.getItem('favorites') || '[]') || []
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavoriteMovie: (state, action: PayloadAction<MovieDetails>) => {
        if (!Array.isArray(state.favorites)) {
            state.favorites = [];
          }

      if (!state.favorites.some(movie => movie.id === action.payload.id)) {
        state.favorites.push(action.payload);
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
      }
    },

    removeFavoriteMovie: (state, action: PayloadAction<Pick<MovieDetails, 'id'>>) => {
        if (!Array.isArray(state.favorites)) {
            state.favorites = [];
          }
        state.favorites = state.favorites?.filter(movie => movie.id !== action.payload.id);
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
      }
  }
});

export const removeAllFavorites = () => ({
    type: 'favorites/removeAll' as const
  });


export const { addFavoriteMovie, removeFavoriteMovie } = favoritesSlice.actions;

export const selectFavorites = (state: { favorites: FavoritesState }) => 
  state.favorites.favorites;

export default favoritesSlice.reducer;