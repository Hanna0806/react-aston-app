import { Input } from 'antd';
import styles from './SearchInput.module.scss'; 
import { useDispatch } from 'react-redux';
import { addSearchText } from '../../redux/searchTextSlice';

const { Search } = Input;

const SearchInput = () => {
  const dispatch = useDispatch();
  const onSearch = (value: string) => {
    if (value !== '') {
        dispatch(addSearchText(value))
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
          onSearch={onSearch}
        />
      </div>
    </div>
  );
};

export default SearchInput;