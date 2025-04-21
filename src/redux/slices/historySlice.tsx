import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { STORAGE_KEYS } from '../../constants/storageKeys';
import { getFromLocalStorage, setToLocalStorage } from '../../utils/localStorageUtils';
import { v4 as uuidv4 } from 'uuid';

export type HistoryItem = {
    id: string;
    item: string;
    date: string;
};

export type HistoryState = {
    history: HistoryItem[];
};

const storedHistory = getFromLocalStorage(STORAGE_KEYS.HISTORY);
const parsedHistory: HistoryItem[] = storedHistory ? JSON.parse(storedHistory) : [];
const initialState: HistoryState = {
    history: parsedHistory,
};

const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        addHistoryItem: (state, action: PayloadAction<string>) => {
            const newQuery = action.payload;
            state.history = state.history.filter(item => item.item !== newQuery);
            const newItem: HistoryItem = {
                item: newQuery,
                date: new Date().toLocaleDateString('ru-RU'),
                id: uuidv4(),
            };
            state.history.push(newItem);
            setToLocalStorage(STORAGE_KEYS.HISTORY, JSON.stringify(state.history));
        },
        deleteHistoryItem: (state, action: PayloadAction<string>) => {
            const idToRemove = action.payload;
            state.history = state.history.filter(item => item.id !== idToRemove);
            setToLocalStorage(STORAGE_KEYS.HISTORY, JSON.stringify(state.history));
        }
    },
});

export const { addHistoryItem, deleteHistoryItem } = historySlice.actions;
export default historySlice.reducer;