import { configureStore } from '@reduxjs/toolkit';
import searchTextSlice from './searchTextSlice';


const store = configureStore({
  reducer: {
    searchText: searchTextSlice,
    
  }
})


export type RootState = ReturnType<typeof store.getState>
export default store;