import { configureStore } from '@reduxjs/toolkit';
import filterCars from '../features/rentCarFilters/filterCarsSlice';
import filterPrice from '../features/rentCarFilters/headerCarsFilterSlice';
import filterBySort from '../features/rentCarFilters/sortByFilterSlice';

export const store = configureStore({
  reducer: {
    filterCars: filterCars,
    filterPrice: filterPrice,
    filterBySort: filterBySort,
  },
});

// These are for TypeScript inference
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
