import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { ROUTES } from "../../constants/routes";
import { addSearchText } from "../../redux/slices/searchTextSlice";
import { addHistoryItem } from "../../redux/slices/historySlice";
import { usersSelector } from "../../redux/slices/usersSlice";
import { selectSearchText } from "../../redux/selectors";

const { Search } = Input;

export const SearchInput = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchText = useSelector(selectSearchText);
  const { activeUser } = useSelector(usersSelector);

  const onSearch = (value: string) => {
    if (value.trim() !== "" && value.trim() !== searchText) {
      dispatch(addSearchText(value.trim()));
      dispatch(addHistoryItem({ username: activeUser, query: value.trim() }));
      navigate(ROUTES.SEARCH_RESULT)
    }
  };

  return (
    <div>
      <div>
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