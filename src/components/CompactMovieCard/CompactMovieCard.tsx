import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CompactMovieCard.module.scss";
import { CompactMovieCardProps } from "./../../types/types";

export const CompactMovieCard: FC<CompactMovieCardProps> = ({
  title,
  poster,
  year,
  movieId,
}) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/movie/${movieId}`);
  };
  return (
    <div className={styles.compactMovieCard} onClick={handleCardClick}>
      <div>
        <img src={poster} alt={`Постер ${title}`} className={styles.poster} />
      </div>
      <div className={styles.infoContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.year}>{year}</p>
      </div>
    </div>
  );
};
