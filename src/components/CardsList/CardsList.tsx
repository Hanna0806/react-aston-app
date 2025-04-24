import {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { API_KEY, API_URL } from "../../api/config";
import styles from "./CardsList.module.scss";
import { setMovies } from "../../redux/slices/userSlice";

export interface IMoviesTitle {
  imdbID: number;
  Title: string;
  Year: number;
  Type: string;
  Poster: string;
}

export const MoviesList = () => {
//   const [cardsData, setCardsData] = useState<IMoviesTitle[]>([]);
  const dispatch = useDispatch();
  const cardsData = useSelector((state) => state.user.users);

  useEffect(() => {
    const fetchCardsData = async () => {
      const response = await fetch(`${API_URL}/?apikey=${API_KEY}&s=inception`);
      const body = await response.json();
    //   setCardsData(body.Search);
    dispatch(setMovies(body.data));
    console.log(body.data);
    };
    
    fetchCardsData();
  }, []);

  return (
    <div className={styles.cardsList}>
      {Array.isArray(cardsData) &&
        cardsData.map((card) => (
          <div>
            <h3>{card.Title}</h3> 
            <p>{card.Year}</p> 
            <p>{card.Type}</p>
            <img src={card.Poster}/>
          </div>
        ))}
    </div>
  );
};
export default MoviesList;
