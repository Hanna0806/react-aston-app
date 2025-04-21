import styles from './Header.module.scss'
import { Button } from 'antd';
import { ROUTES } from '../../constants/routes';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { deleteActiveUser, usersSelector } from '../../redux/slices/usersSlice';

export function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { activeUser } = useSelector(usersSelector);

    const authHandler = () => navigate(ROUTES.SIGN_IN);
    const regHandler = () => navigate(ROUTES.SIGN_UP);
    const exitHandler = () => dispatch(deleteActiveUser());

    return (
        <header className={styles.header}>
            {!activeUser && <div className={styles.buttons}>
                <Button type="primary" onClick={authHandler}>Войти</Button>
                <Button onClick={regHandler}>Регистрация</Button>
            </div>}
            {activeUser && <div className={styles.profile}>
                <p className={styles.welcome}>Добро пожаловать, <span>{activeUser}</span>!</p>
                <Button type="primary" onClick={exitHandler}>Выйти</Button>
            </div>}
        </header>
    )
}