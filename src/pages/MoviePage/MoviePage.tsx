import { FC } from "react";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import styles from "./MoviePage.module.scss";

export type MoviePageProps = {
  movieId?: number;
}

export const MoviePage: FC<MoviePageProps> = ({ movieId}) => {
  return (
    <div className={styles.moviePage}>
      <MovieCard movieId={movieId}/>
    </div>
  );
};

