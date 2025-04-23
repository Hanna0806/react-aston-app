import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Divider, Button } from "antd";
import { MovieDetails } from "../../types/types";
import {
  selectFavorites,
  removeAllFavorites,
} from "../../redux/slices/favoritesSlice";
import { MovieCard } from "../MovieCard/MovieCard";
import styles from "./FavoriteMovies.module.scss";

export const FavoriteMovies = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const handleRemoveAllFavorites = () => {
    dispatch(removeAllFavorites());
  };

  return (
    <div className={styles.favoriteMoviesContainer}>
      <Divider orientation="left">Избранное</Divider>
      {favorites.length === 0 ? (
        <p className={styles.noFavorites}>Нет избранных фильмов.</p>
      ) : (
        <div className={styles.moviesList}>
          <Button
            key="delete"
            danger
            type="text"
            onClick={handleRemoveAllFavorites}
            className={styles.removeAllButton}
          >
            Удалить все из избранного
          </Button>
          <Row gutter={[16, 16]}>
            {favorites.map((movie: MovieDetails) => (
              <Col key={movie.id} xs={24} sm={12} md={8} lg={6}>
                <MovieCard movieId={movie.id} />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
};
