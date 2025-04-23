import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { STORAGE_KEYS } from '../../constants/storageKeys';
import { getFromLocalStorage, setToLocalStorage } from '../../utils/localStorageUtils';
import { UserSlice } from '../../types/types';


// interface SearchTextState {
//   request: string;
// }

const initialState: UserSlice = {
  users: [],
};

const userSlice = createSlice({
  name: 'searchText', 
  initialState,
  reducers: {
    addSearchText: (state, action: PayloadAction<string>) => {
      const newRequest = action.payload;
      setToLocalStorage(STORAGE_KEYS.SEARCH_REQUEST, newRequest);
      state.request = newRequest; 
    },
    setUsers(state, action: PayloadAction<UserSlice>) {
      state.users = action.payload;
    },

    // setUsersFilter: (state, action: PayloadAction<UserSlice>) => {
    //   state.users = action.payload;
    // Промежуточный массив
    // }
  },
});

export const { addSearchText, setUsers } = userSlice.actions;
export default userSlice.reducer;