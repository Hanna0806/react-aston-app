import { SearchInput } from "../../components/SearchInput/SearchInput";
import search_img from "../../img/home_photo.png";
import styles from "./Search.module.scss";

export default function Search() {
  return (
    <div className={styles.container}>
      <img className={styles.photo} src={search_img} alt="search-img" />
      <p className={styles.title}>Поиск фильмов</p>
      <div className={styles.searchWrapper}>
        <SearchInput />
      </div>
    </div>
  );
}