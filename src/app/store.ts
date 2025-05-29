import { configureStore } from '@reduxjs/toolkit';
import filterCars from '../features/cars/filterCarsSlice';

export const store = configureStore({
  reducer: { filterCars: filterCars },
});

// These are for TypeScript inference
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
