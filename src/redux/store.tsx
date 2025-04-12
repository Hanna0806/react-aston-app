import { configureStore } from '@reduxjs/toolkit';
import searchTextSlice from './searchTextSlice';


const store = configureStore({
  reducer: {
    searchText: searchTextSlice,
    
  }
})

export default store;