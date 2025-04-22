import { FC } from "react";
import styles from "./MovieCard.module.scss";
import { useMovieDetails } from "../../hooks/useMovieDetails";
import { NotFoundMovie } from "../NotFoundMovie/NotFoundMovie";
import { LoadingState } from "../LoadingState/LoadingState";
import { ErrorState } from "../ErrorState/ErrorState";
import { FavoriteToggle } from "../FavoriteToggle/FavoriteToggle";
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteMovie, removeFavoriteMovie } from '../../redux/slices/favoritesSlice';
import { selectFavorites } from '../../redux/slices/favoritesSlice';
import { MovieDetails } from '../../hooks/useMovieDetails';

export type MovieCardProps = {
  movieId?: string;
};

export const MovieCard: FC<MovieCardProps> = ({ movieId = null }) => {
    const dispatch = useDispatch();
    const favorites = useSelector(selectFavorites);
  const { loading, error, movie } = useMovieDetails(movieId);

  if (loading) {
    return <LoadingState isLoading={loading} />;
  }

  if (error) {
    return <ErrorState error={error} />;
  }

  if (!movie) {
    return <NotFoundMovie movie={movie} />;
  }

  const handleFavoriteToggle = (newIsFavorite: boolean) => {
    if (newIsFavorite) {
      dispatch(addFavoriteMovie(movie)); 
    } else {
      dispatch(removeFavoriteMovie({ id: movie.id } as Pick<MovieDetails, "id">));
    }
  };

  const isFavorite = Array.isArray(favorites) ? 
  favorites.some(f => f.id === movie.id) : false;

  return (
    <div className={styles.movieCard}>
      <FavoriteToggle 
      isFavorite={isFavorite} 
      onToggle={handleFavoriteToggle}/>

      {movie.poster && (
        <img
          src={`${movie.poster}`}
          alt={`Постер ${movie.title}`}
          className={styles.poster}
        />
      )}
      <h2>{movie.title}</h2>
      <p>Год: {movie.year}</p>
      <p className={styles['plot-overview']}>{movie.plot}</p>
      <p>Рейтинг: {movie.user_rating}</p>
    </div>
  );
};
