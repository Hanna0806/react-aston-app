import { Input } from 'antd';
import styles from './SearchInput.module.scss'; 
import { useDispatch, useSelector } from 'react-redux';
import { addSearchText } from '../../redux/searchTextSlice';
import type { RootState } from '../../redux/store';

const { Search } = Input;

export const SearchInput = () => {
  const dispatch = useDispatch();
  const searchText = useSelector((state: RootState) => state.searchText.request);

  const onSearch = (value: string) => {
    if (value.trim() !== '' && value.trim() !== searchText) {
      dispatch(addSearchText(value.trim()));
    }
  };

  return (
    <div className={styles.searchInput}>
      <p >Поиск фильмов</p>
      <div className={styles.searchInput__input}>
        <Search
          placeholder="введите название фильма"
          allowClear
          enterButton="Найти"
          size="large"
          defaultValue={searchText}
          onSearch={onSearch}
        />
      </div>
    </div>
  );
};