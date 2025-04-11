import styles from './Header.module.scss'
import { Button } from 'antd';

function Header() {
    return (
        <header className={styles.header}>
            <Button type="primary" href='/auth'>Войти</Button>
            <Button href='/registration'>Регистрация</Button>
        </header>
    )
}

export default Header