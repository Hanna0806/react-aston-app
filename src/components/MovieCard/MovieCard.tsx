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
import { filterValidMovies } from "../../utils/localStorageUtils";

export const MovieCard: FC<MovieCardProps> = ({ movieId = null }) => {
  const favoritesRaw = useSelector(selectFavorites);
  
  const favorites = Array.isArray(favoritesRaw)
    ? filterValidMovies(favoritesRaw)
    : [];
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

  // return (
  //   <div className={styles.movieCard}>
  //     <FavoriteToggle isFavorite={isFavorite} movie={movie} />
  //     {movie.poster && (
  //       <img
  //         src={`${movie.poster}`}
          
  //         alt={`Постер ${movie.title}`}
  //         className={styles.poster}
  //       />
  //     )}
  //     <h2>{movie.title}</h2>
  //     <p>Год: {movie.year}</p>
  //     <p className={styles["plot-overview"]}>{movie.plot}</p>
  //     <p>Рейтинг: {movie.user_rating}</p>
  //   </div>
  // );

  return (
    <div className={styles.movieCard}>
<div className={styles.posterContainer}>
  <img
    src={`${movie.poster}`}
    alt={`Постер ${movie.title}`}
    className={styles.poster}
  />
</div>
<div className={styles.infoContainer}>
  <FavoriteToggle isFavorite={isFavorite} movie={movie} />
  <h2>{movie.title}</h2>
  <p className={styles.year}>Year: {movie.year}</p>
  <p className={styles.language}>Language: {movie.language}</p>
  <p className={styles.plot}>{movie.plot}</p>
  <p className={styles.actors}>Actors: {movie.actors}</p>
  <p className={styles.rating}>Rating: {movie.user_rating}</p>
</div>
</div>
  );
};

//   )
// };
