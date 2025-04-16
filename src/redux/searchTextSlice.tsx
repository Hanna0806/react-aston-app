import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { STORAGE_KEYS } from '../constants/storageKeys';
import { getFromLocalStorage, setToLocalStorage } from '../utils/localStorageUtils';

interface SearchTextState {
  request: string;
}

const initialState: SearchTextState = {
  request: getFromLocalStorage(STORAGE_KEYS.SEARCH_REQUEST) || '',
};

const searchTextSlice = createSlice({
  name: 'searchText', 
  initialState,
  reducers: {
    addSearchText: (state, action: PayloadAction<string>) => {
      const newRequest = action.payload;
      setToLocalStorage(STORAGE_KEYS.SEARCH_REQUEST, newRequest);
      state.request = newRequest; 
    },
  },
});

export const { addSearchText } = searchTextSlice.actions;
export default searchTextSlice.reducer;