import { useState, useEffect } from "react";
import { API_KEY, API_URL, API_HEADERS } from "../../api/config";
import { MovieCard } from "../MovieCard/MovieCard";
import styles from "./CardsList.module.scss";
import { log } from "console";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../../redux/slices/userSlice";


export interface IMoviesTitle {
  id: number;
  title: string;
  year: number;
  type: string;
}

export interface IMoviesList {
  titles: IMoviesTitle[];
  page: number;
  total_results: number;
  total_pages: number;
}

const MoviesListCopy = () => {
//   const [cardsData, setCardsData] = useState<IMoviesList[]>([]);
  const dispatch = useDispatch();
  const cardsData = useSelector((state) => state.user.users);
  useEffect(() => {
    const fetchCardsData = async () => {
      const response = await fetch(
        `https://reqres.in/api/users?page=2`
        // { headers: API_HEADERS }
      );
      const body = await response.json();
    //   console.log(response);
    //   console.log(body);
    //   setCardsData(body.data);
      dispatch(setUsers(body.data));
    };
    fetchCardsData();
  }, []);
// console.log(cardsData)
  return (
    <div className={styles.cardsList}>
      {Array.isArray(cardsData) &&
        cardsData.map((card) => (
          <div key={card.id}>
            <h3>
              {card.email}-{card.first_name}
            </h3>
          </div>
        ))}
    </div>
  );
};

export default MoviesListCopy;
