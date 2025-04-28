import { FC } from "react";
import styles from "./NotFoundMovie.module.scss";
import { NotFoundMovieProps } from "../../types/types";

export const NotFoundMovie: FC<NotFoundMovieProps> = ({ movie }) => {
  return (
    <div className={styles.notFoundMovie}>
      <div className={styles.message}>Фильм не найден</div>
      {process.env.NODE_ENV === "development" && (
        <pre className={styles.debugInfo}>
          Debug Info:
          {JSON.stringify(movie, null, 2)}
        </pre>
      )}
    </div>
  );
};
