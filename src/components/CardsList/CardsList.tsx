import {useState, useEffect} from 'react';
import { API_KEY, API_URL, API_HEADERS } from "../../api/config";
import { MovieCard } from '../MovieCard/MovieCard';
import styles from './CardsList.module.scss'
import { log } from 'console';

export interface IMoviesTitle {
    id: number,
    title: string;
    year: number;
    type: string,
}

export interface IMoviesList {
        titles: IMoviesTitle[],
        page: number,
        total_results: number,
        total_pages: number,
}

export const MoviesList = () => {
    const [cardsData, setCardsData] = useState<IMoviesList[]>([]);

    useEffect(() => {
        const fetchCardsData = async () => {
            const response = await fetch(
                `http://www.omdbapi.com/?apikey=6d8ef9e9&type=movie`,
                // { headers: API_HEADERS }
            );
            const data = await response.json();
            console.log(response);
            console.log(data);
            setCardsData(data);
        };
        fetchCardsData();
    }, []);

    return (
        <div className={styles.cardsList}>
            {Array.isArray(cardsData) && cardsData.map((card, index) => <MovieCard key={index} {...card} />)}
        </div>
    );
}

export default MoviesList;