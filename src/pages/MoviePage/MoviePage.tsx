import { FC } from "react";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import styles from "./MoviePage.module.scss";

export interface MoviePageProps {
  movieId?: number;
  name?: string;
}

export const MoviePage: FC<MoviePageProps> = ({ movieId, name }) => {
  return (
    <div className={styles.moviePage}>
      <MovieCard movieId={movieId} name={name} />
    </div>
  );
};

