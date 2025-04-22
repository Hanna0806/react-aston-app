import { MovieCard } from "../../components/MovieCard/MovieCard";
import { useParams } from 'react-router-dom';

export const MoviePage = () => {
  const { movieId } = useParams(); 
  console.log('Fetching movie details for ID:', movieId); 

  return (
    <div>
      <MovieCard movieId={movieId} />
    </div>
  );
};