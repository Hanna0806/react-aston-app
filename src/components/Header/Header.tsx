import styles from "./Header.module.scss";
import { Button } from "antd";
import { ROUTES } from "../../constants/routes";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteActiveUser, usersSelector } from "../../redux/slices/usersSlice";
import { removeSearchText } from "../../redux/slices/searchTextSlice";

export function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { activeUser } = useSelector(usersSelector);

  const authHandler = () => navigate(ROUTES.SIGN_IN);
  const regHandler = () => navigate(ROUTES.SIGN_UP);
  const exitHandler = () => {
    dispatch(deleteActiveUser());
    dispatch(removeSearchText());
    navigate(ROUTES.HOME);
  };
  const handleHistoryClick = () => navigate(ROUTES.HISTORY);
  const handleLogoClick = () => {
    if (activeUser) {
      navigate(ROUTES.SEARCH);
    } else {
      navigate(ROUTES.HOME);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <p className={styles.logo} onClick={handleLogoClick}>
          КиноПоиск
        </p>
        {!activeUser && (
          <div className={styles.buttons}>
            <Button type="primary" onClick={authHandler}>
              Войти
            </Button>
            <Button onClick={regHandler}>Регистрация</Button>
          </div>
        )}
        {activeUser && (
          <div className={styles.profile}>
            <div className={styles.navigation}>
              <Button type="link" className={styles.navigationLink} onClick={handleHistoryClick}>
                История
              </Button>
            </div>
            <p className={styles.welcome}>
              Добро пожаловать, <span>{activeUser}</span>!
            </p>
            <Button type="primary" onClick={exitHandler}>
              Выйти
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};