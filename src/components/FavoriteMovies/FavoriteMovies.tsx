import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Divider, Button } from 'antd';
import { MovieDetails } from '../../hooks/useMovieDetails';
import { selectFavorites, removeAllFavorites } from '../../redux/slices/favoritesSlice';
import { MovieCard } from '../MovieCard/MovieCard';

export const FavoriteMovies = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const handleRemoveAllFavorites = () => {
    dispatch(removeAllFavorites());
  };

  return (
    <div>
       <Divider orientation="left">Избранное</Divider>
      {favorites.length === 0 ? (
        <p>Нет избранных фильмов.</p>
      ) : ( 
        <Row gutter={[16, 16]}> 
          {favorites.map((movie: MovieDetails) => (
            <Col key={movie.id} xs={24} sm={12} md={8} lg={6}> 
              <MovieCard movieId={movie.id} />
            </Col>
          ))}
          <Button
          key="delete"
          danger
          type="text"
          onClick={handleRemoveAllFavorites}>Удалить все из избранного</Button>
        </Row>
        
      )}
    </div>
  );
};