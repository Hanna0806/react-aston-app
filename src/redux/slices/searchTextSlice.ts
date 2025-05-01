import { STORAGE_KEYS } from "../../constants/storageKeys";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchTextState {
  request: string;
}

const initialState: SearchTextState = {
  request: localStorage.getItem(STORAGE_KEYS.SEARCH_REQUEST) || "",
};

const searchTextSlice = createSlice({
  name: "searchText",
  initialState,
  reducers: {
    addSearchText: (state, action: PayloadAction<string>) => {
      state.request = action.payload;
    },
    removeSearchText: (state) => {
      state.request = "";
    },
  },
});

export const { addSearchText, removeSearchText } = searchTextSlice.actions;
export default searchTextSlice.reducer;