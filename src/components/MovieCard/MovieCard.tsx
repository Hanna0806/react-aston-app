import { FC } from "react";
import styles from "./MovieCard.module.scss";
import { useMovieDetails } from "../../hooks/useMovieDetails";
import { NotFoundMovie } from "../NotFoundMovie/NotFoundMovie";
import { LoadingState } from "../LoadingState/LoadingState";
import { ErrorState } from "../ErrorState/ErrorState";
import { FavoriteToggle } from "../FavoriteToggle/FavoriteToggle";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/slices/favoritesSlice";
import { MovieCardProps } from "./../../types/types";

export const MovieCard: FC<MovieCardProps> = ({ movieId = null }) => {
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

  const isFavorite = favorites.some((f) => f.id === movie.id);

  return (
    <div className={styles.movieCard}>
      <FavoriteToggle isFavorite={isFavorite} movie={movie} />
      {movie.poster && (
        <img
          src={`${movie.poster}`}
          alt={`Постер ${movie.title}`}
          className={styles.poster}
        />
      )}
      <h2>{movie.title}</h2>
      <p>Год: {movie.year}</p>
      <p className={styles["plot-overview"]}>{movie.plot}</p>
      <p>Рейтинг: {movie.user_rating}</p>
    </div>
  );
};
