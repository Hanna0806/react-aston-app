import styles from './Error.module.scss';
import { Button } from 'antd';

export function Error() {
    function reloadPage() {
        location.reload()
    }

    return <div className={styles.error}>
        <h2 className={styles.title}>Что-то пошло не так</h2>
        <Button type="primary" size="large" onClick={reloadPage}>Перезагрузить приложение</Button>
    </div>
}