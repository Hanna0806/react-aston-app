import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchTextState {
  request: string;
}

const initialState: SearchTextState = {
  request: localStorage.getItem('request') || '',
};

const searchTextSlice = createSlice({
  name: 'searchText', 
  initialState,
  reducers: {
    addSearchText: (state, action: PayloadAction<string>) => {
      const newRequest = action.payload;
      localStorage.setItem('request', newRequest);
      state.request = newRequest; 
    },
  },
});

export const { addSearchText } = searchTextSlice.actions;
export default searchTextSlice.reducer;