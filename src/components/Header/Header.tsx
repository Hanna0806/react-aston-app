import styles from './Header.module.scss'
import { Button } from 'antd';
import { ROUTES } from '../../constants/constants';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../redux/store';
import { deleteActiveUser } from '../../redux/slices/usersSlice';

export function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { activeUser } = useSelector((state: IRootState) => state.users);

    return (
        <header className={styles.header}>
            {!activeUser && <div className={styles.buttons}>
                <Button type="primary" onClick={() => navigate(ROUTES.SIGN_IN)}>Войти</Button>
                <Button onClick={() => navigate(ROUTES.SIGN_UP)}>Регистрация</Button>
            </div>}
            {activeUser && <div className={styles.profile}>
                <p className={styles.welcome}>Добро пожаловать, <span>{activeUser}</span>!</p>
                <Button type="primary" onClick={() => dispatch(deleteActiveUser())}>Выйти</Button>
            </div>}
        </header>
    )
}