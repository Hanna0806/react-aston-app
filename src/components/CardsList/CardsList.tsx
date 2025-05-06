import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_KEY, API_URL } from "../../api/config";
import styles from "./CardsList.module.scss";
import { setMovies } from "../../redux/slices/moviesListSlice";
import { selectSearchText } from "../../redux/selectors";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

export const MoviesList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cardsData = useSelector((state) => state.movies.movies);
  const searchText = useSelector(selectSearchText);

  useEffect(() => {
    console.log(searchText);
    const fetchCardsData = async () => {
      const response = await fetch(`${API_URL}/?apikey=${API_KEY}&s=${searchText}`);
      const body = await response.json();
      dispatch(setMovies(body.Search));
    };

    fetchCardsData();
  }, [searchText]);

  const handleCardClick = (id: string) => {
    navigate(ROUTES.MOVIEPAGE.replace(":movieId", id));
  };


  return (
    <div className={styles.cardsList}>
      {Array.isArray(cardsData) &&
        cardsData.map((card) => (
          <div key={card.imdbID} className={styles.card}  onClick={() => handleCardClick(card.imdbID)}>
            <img src={card.Poster} alt={card.Title} />
            <h3>{card.Title}</h3>
            <p>{card.Year}</p>
            <p>{card.Type}</p>
          </div>
        ))}
    </div>
  );
};
export default MoviesList;