import { SearchInput } from "../../components/SearchInput/SearchInput";
import home_photo from "../../img/home_photo.png";
import styles from "./Search.module.scss";

export default function Search() {
  return (
    <div className={styles.container}>
      <img className={styles.photo} src={home_photo} alt="home-photo" />
      <p className={styles.title}>Поиск фильмов</p>
      <div className={styles.searchWrapper}>
        <SearchInput />
      </div>
    </div>
  );
}