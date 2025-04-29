import { FC } from "react";
import styles from "./MovieCard.module.scss";
import { useMovieDetails } from "../../hooks/useMovieDetails";
import { NotFoundMovie } from "../NotFoundMovie/NotFoundMovie";
import { LoadingState } from "../LoadingState/LoadingState";
import { ErrorState } from "../ErrorState/ErrorState";
import { FavoriteToggle } from "../FavoriteToggle/FavoriteToggle";
import { useSelector } from "react-redux";
import { MovieCardProps } from "./../../types/types";
import { usersSelector } from "../../redux/slices/usersSlice";
import { STORAGE_KEYS } from "../../constants/storageKeys";


export const MovieCard: FC<MovieCardProps> = ({ movieId = null }) => {

    const { activeUser } = useSelector(usersSelector);
    const userPrefix = `${STORAGE_KEYS.FAVORITES}_${activeUser}`;
    const favorites = JSON.parse(localStorage.getItem(userPrefix) || "[]");
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

  const isFavorite = favorites.some(
    ({ id }: { id: string }) => id === movie.id
  );


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
  <FavoriteToggle isFavorite={isFavorite} movie={movie} userName={activeUser}/>
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
