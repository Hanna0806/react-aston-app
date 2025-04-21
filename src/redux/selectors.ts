import { RootState } from '../redux/store'; 
import { HistoryItem } from '../redux/historySlice';

export const selectHistoryList = (state: RootState): HistoryItem[] => state.history.history;