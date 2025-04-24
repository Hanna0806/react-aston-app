import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { STORAGE_KEYS } from '../../constants/storageKeys';
import { getFromLocalStorage, setToLocalStorage } from '../../utils/localStorageUtils';
import { UserSlice } from '../../types/types';


interface MoviesSlice {
  movies: [],
}

const initialState: MoviesSlice = {
  movies: [],
};

const moviesSlice = createSlice({
  name: 'searchText', 
  initialState,
  reducers: {
    // addSearchText: (state, action: PayloadAction<string>) => {
    //   const newRequest = action.payload;
    //   setToLocalStorage(STORAGE_KEYS.SEARCH_REQUEST, newRequest);
    //   state.request = newRequest; 
    // },
    setMovies(state, action: PayloadAction<UserSlice>) {
      state.movies = action.payload;
    },

    // setUsersFilter: (state, action: PayloadAction<UserSlice>) => {
    //   state.users = action.payload;
    // Промежуточный массив
    // }
  },
});

export const { addSearchText, setMovies } = moviesSlice.actions;
export default moviesSlice.reducer;