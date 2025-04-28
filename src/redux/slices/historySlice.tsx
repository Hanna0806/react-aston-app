import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { STORAGE_KEYS } from "../../constants/storageKeys";
import { getFromLocalStorage, setToLocalStorage } from "../../utils/localStorageUtils";
import { v4 as uuidv4 } from "uuid";

export type HistoryItem = {
  id: string;
  item: string;
  date: string;
};

export type HistoryState = {
  history: HistoryItem[];
};

const getUserHistory = (username: string) => {
  const storedHistory = getFromLocalStorage(`${STORAGE_KEYS.HISTORY}_${username}`);
  return storedHistory ? JSON.parse(storedHistory) : [];
};

const initialState: HistoryState = {
  history: [],
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    setUserHistory: (state, action: PayloadAction<string>) => {
      const username = action.payload;
      state.history = getUserHistory(username);
    },
    addHistoryItem: (state, action: PayloadAction<{ username: string; query: string }>) => {
      const { username, query } = action.payload;
      state.history = state.history.filter((item) => item.item !== query);
      const newItem: HistoryItem = {
        item: query,
        date: new Date().toLocaleDateString("ru-RU"),
        id: uuidv4(),
      };
      state.history.unshift(newItem);
      setToLocalStorage(`${STORAGE_KEYS.HISTORY}_${username}`, JSON.stringify(state.history));
    },
    deleteHistoryItem: (state, action: PayloadAction<{ username: string; id: string }>) => {
      const { username, id } = action.payload;
      state.history = state.history.filter((item) => item.id !== id);
      setToLocalStorage(`${STORAGE_KEYS.HISTORY}_${username}`, JSON.stringify(state.history));
    },
  },
});

export const { setUserHistory, addHistoryItem, deleteHistoryItem } = historySlice.actions;
export default historySlice.reducer;