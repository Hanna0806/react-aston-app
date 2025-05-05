import { MovieDetails } from "../types/types";

export const isValidMovie = (movie: any): movie is MovieDetails => {
  return (
    movie &&
    typeof movie.id === "number" &&
    typeof movie.title === "string" &&
    typeof movie.year === "number" &&
    typeof movie.plot === "string" &&
    typeof movie.user_rating === "number"
  );
};

export const filterValidMovies = (movies: any[]): MovieDetails[] => {
  return movies.filter(isValidMovie);
};

export const getFromLocalStorage = (key: string): string | null => {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      console.warn(`Error getting key "${key}" from localStorage`, e);
      return null;
    }
  };
  
  export const setToLocalStorage = (key: string, value: string): void => {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      console.warn(`Error setting key "${key}" to localStorage`, e);
    }
  };