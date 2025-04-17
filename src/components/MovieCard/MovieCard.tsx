import { FC } from "react";
import styles from "./MovieCard.module.scss";
import { useMovieDetails } from "../../hooks/useMovieDetails";
import { NotFoundMovie } from "../NotFoundMovie/NotFoundMovie";

export type MovieCardProps = {
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
    return <NotFoundMovie movie={movie} />;
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
      <p>Year: {movie.year}</p>
      <p>{movie.plot_overview}</p>
      <p>Movie rating: {movie.user_rating}</p>
    </div>
  );
};
