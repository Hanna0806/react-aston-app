import styles from "./Home.module.scss";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

export default function Home() {
  const navigate = useNavigate();
  const handleAuthClick = () => navigate(ROUTES.SIGN_IN);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Добро пожаловать в мир кино!</h1>
      <p className={styles.description}>
        Чтобы начать поиск фильмов, создайте аккаунт или войдите в уже существующий. Авторизация
        позволит вам сохранять избранные фильмы в личном кабинете и просматривать историю поисковых
        запросов.
      </p>
      <p className={styles.linkAction} onClick={handleAuthClick}>
        Войдите, чтобы начать искать фильмы!
      </p>
    </div>
  );
};