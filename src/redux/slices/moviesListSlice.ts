import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { STORAGE_KEYS } from "../../constants/storageKeys";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../../utils/utils";

export type MoviesSlice = {
  movies: IMoviesTitle[];
  request?: string;
};

export type IMoviesTitle = {
  imdbID: number;
  Title: string;
  Year: number;
  Type: string;
  Poster: string;
};

const initialState: MoviesSlice = {
  movies: [],
  request: getFromLocalStorage(STORAGE_KEYS.SEARCH_REQUEST) || "",
};

const moviesSlice = createSlice({
  name: "searchText",
  initialState,
  reducers: {
    addSearchText: (state, action: PayloadAction<string>) => {
      const newRequest = action.payload;
      setToLocalStorage(STORAGE_KEYS.SEARCH_REQUEST, newRequest);
      state.request = newRequest;
    },
    setMovies(state, action: PayloadAction<IMoviesTitle[]>) {
      state.movies = action.payload;
    },
  },
});

export const { addSearchText, setMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
