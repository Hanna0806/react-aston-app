import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Divider, Button } from "antd";
import { MovieDetails } from "../../types/types";
import { removeAllFavorites } from "../../redux/slices/favoritesSlice";
// import { MovieCard } from "../MovieCard/MovieCard";
import styles from "./FavoriteMovies.module.scss";
import { usersSelector } from "../../redux/slices/usersSlice";
import { STORAGE_KEYS } from "../../constants/storageKeys";
import { CompactMovieCard } from "../CompactMovieCard/CompactMovieCard";

export const FavoriteMovies = () => {
  const dispatch = useDispatch();
  const { activeUser } = useSelector(usersSelector);
  const userPrefix = `${STORAGE_KEYS.FAVORITES}_${activeUser}`;
  const favorites = JSON.parse(localStorage.getItem(userPrefix) || "[]");

  const handleRemoveAllFavorites = () => {
    dispatch(removeAllFavorites({ userName: activeUser }));
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
                <CompactMovieCard
                  movieId={movie.id}
                  title={movie.title}
                  poster={movie.poster}
                  year={movie.year}
                />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
};
