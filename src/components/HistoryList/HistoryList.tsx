import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { List, Typography, Divider, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { deleteHistoryItem } from '../../redux/slices/historySlice';
import { addSearchText } from '../../redux/slices/searchTextSlice';
import { ROUTES } from '../../constants/routes';
import { selectHistoryList } from '../../redux/selectors';
import {  usersSelector } from '../../redux/slices/usersSlice'; 
import { setUserHistory } from '../../redux/slices/historySlice';

const { Text } = Typography;

export const HistoryList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { activeUser } = useSelector(usersSelector); 
    const historyList = useSelector(selectHistoryList);  

    useEffect(() => {
        if (activeUser) {
          dispatch(setUserHistory(activeUser));
        }
      }, [activeUser]);

    const handleDelete = (id: string) => {
        dispatch(deleteHistoryItem({ username: activeUser, id })); 
    };

    const handleItemClick = (item: string) => {
        dispatch(addSearchText(item));
        navigate(ROUTES.SEARCH);
    };

    return (
        <div className=''>
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