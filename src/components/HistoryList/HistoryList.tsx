import { useNavigate } from 'react-router-dom';
import { List, Typography, Divider, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import styles from './HistoryList.module.scss';
import { deleteHistoryItem } from '../../redux/historySlice';
import { addSearchText } from '../../redux/searchTextSlice';
import { ROUTES } from '../../constants/routes';

const { Text } = Typography;

export const HistoryList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const historyList = useSelector((state: RootState) => state.history.history);

    const handleDelete = (id: string) => {
        dispatch(deleteHistoryItem(id));
    };

    const handleItemClick = (item: string) => {
        dispatch(addSearchText(item));
        navigate(ROUTES.SEARCH);
    };

    return (
        <div className={styles.historyList}>
            <Divider orientation="left">История моих запросов</Divider>
            <List
                bordered
                dataSource={historyList}
                renderItem={(entry) => (
                    <List.Item
                        key={entry.id}
                        actions={[
                            <Button
                                key="delete"
                                danger
                                type="text"
                                onClick={() => handleDelete(entry.id)}
                            >
                                Удалить
                            </Button>
                        ]}
                    >
                        <Text
                            strong
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleItemClick(entry.item)}
                        >
                            {entry.item}
                        </Text>
                        <Text type="secondary" style={{ marginLeft: 'auto' }}>
                            {entry.date}
                        </Text>
                    </List.Item>
                )}
            />
        </div>
    );
};