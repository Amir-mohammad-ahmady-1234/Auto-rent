import { configureStore } from '@reduxjs/toolkit';
import filterCars from '../features/rentCarFilters/filterCarsSlice';
import filterPrice from '../features/rentCarFilters/headerCarsFilterSlice';

export const store = configureStore({
  reducer: { filterCars: filterCars, filterPrice: filterPrice },
});

// These are for TypeScript inference
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
