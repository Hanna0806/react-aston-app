import { configureStore } from '@reduxjs/toolkit';
import searchTextSlice from './searchTextSlice';
import historySlice from './historySlice';


const store = configureStore({
  reducer: {
    searchText: searchTextSlice,
    history: historySlice,
    
  }
})


export type RootState = ReturnType<typeof store.getState>
export default store;