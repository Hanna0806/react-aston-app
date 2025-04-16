import { FC } from 'react';
import styles from './MovieCard.module.scss';
import { useMovieDetails } from '../../hooks/useMovieDetails';

export interface MovieCardProps {
  movieId?: number;
  name?: string;
}

export const MovieCard: FC<MovieCardProps> = ({ movieId = null }) => {
  const { loading, error, movie } = useMovieDetails(movieId);

  if (loading) {
    return (
      <div className={styles.movieCard}>
        <div>Загрузка...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.movieCard}>
        <div>Ошибка: {error}</div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className={styles.movieCard}>
        <div>Фильм не найден</div>
        {process.env.NODE_ENV === 'development' && (
          <pre>
            Debug Info:
            {JSON.stringify(movie, null, 2)}
          </pre>
        )}
      </div>
    );
  }


  return (
    <div className={styles.movieCard}>
      {movie.poster && (
                <img 
                    src={`${movie.poster}`}
                    alt={`Постер ${movie.title}`}
                    className={styles.poster}
                />
            )}
      <h2>{movie.title}</h2>
      <p>Год: {movie.year}</p>
      <p>{movie.plot_overview}</p>
      <p>Рейтинг: {movie.user_rating}</p>
    </div>
  );
};