import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './slices/usersSlice';
import searchTextSlice from './slices/searchTextSlice';
import favoritesReducer  from './slices/favoritesSlice';
import { MovieDetails } from '../hooks/useMovieDetails';
import { removeAllFavorites, addFavoriteMovie } from './slices/favoritesSlice';


export const store = configureStore({
    reducer: {
        searchText: searchTextSlice,
        users: usersSlice,
        favorites: favoritesReducer,
    },
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        },
    }),
});

window.addEventListener('load', () => {
    try {
      const savedFavorites = localStorage.getItem('favorites');
      if (savedFavorites) {
        const parsedData = JSON.parse(savedFavorites);

        if (!Array.isArray(parsedData)) {
          console.warn('Сохраненные данные не являются массивом. Используем пустой массив.');
          return;
        }

        const validMovies = parsedData.filter((movie): movie is MovieDetails => 
          movie && 
          'id' in movie && 
          'title' in movie && 
          'year' in movie && 
          'plot_overview' in movie && 
          'user_rating' in movie
        );
  
        if (validMovies.length === 0) {
          console.warn('Нет валидных фильмов в сохраненных данных');
          return;
        }

        store.dispatch(removeAllFavorites());
        
        validMovies.forEach(movie => {
          store.dispatch(addFavoriteMovie(movie));
        });
      }
    } catch (error) {
      console.error('Ошибка при загрузке сохраненных фильмов:', error);
    }
  });
  
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;