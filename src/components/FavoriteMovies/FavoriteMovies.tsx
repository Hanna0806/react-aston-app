import { useSelector, useDispatch } from 'react-redux';
import { Divider } from 'antd';
import { MovieDetails } from '../../hooks/useMovieDetails';
import { removeFavoriteMovie } from '../../redux/slices/favoritesSlice';
import { selectFavorites } from '../../redux/slices/favoritesSlice';

export const FavoriteMovies = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);


  const handleRemove = (movieId: number) => {
    dispatch(removeFavoriteMovie({ id: movieId } as Pick<MovieDetails, "id">));
  };

  return (
    <div>
       <Divider orientation="left">История моих запросов</Divider>
      {favorites.length === 0 ? (
        <p>Нет избранных фильмов.</p>
      ) : (
        <ul>
          {favorites.map((movie: MovieDetails) => (
            <li key={movie.id}>
              {movie.title}
              <button onClick={() => handleRemove(movie.id)}>Удалить из Избранного</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};