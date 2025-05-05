import { SearchInput } from "../../components/SearchInput/SearchInput";
import { MoviesList } from "../../components/CardsList/CardsList";
import styles from "./SearchResult.module.scss";

export default function SearchResult() {
  return (
    <div className={styles.searchResult}>
      <div className={styles.searchInputWrapper}>
        <h1 className={styles.title}>Поиск фильмов</h1>
        <SearchInput />
      </div>
      <div className={styles.moviesListWrapper}>
        <MoviesList />
      </div>
    </div>
  );
};