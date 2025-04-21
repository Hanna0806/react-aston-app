import { RootState } from '../redux/store'; 
import { HistoryItem } from './slices/historySlice';

export const selectHistoryList = (state: RootState): HistoryItem[] => state.history.history;