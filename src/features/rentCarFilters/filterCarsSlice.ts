import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CarsState } from '../../types/filterCarType';
import type { TCar } from '../../types/CarType';

interface IPayload {
  price: string;
  maxPrice: string;
  brand: string[];
  type: string;
}

const initialState: CarsState = { filteredCars: [], cars: [] };

const filterCars = createSlice({
  name: 'filterCars',
  initialState,
  reducers: {
    // payload types : price: string,brand: array, type: string
    allFilters: (state, action: PayloadAction<IPayload>) => {
      state.filteredCars = state.cars.filter((car) => {
        return (
          +car.dailyPrice >= +action.payload.price &&
          +car.dailyPrice <= +action.payload.maxPrice &&
          (action.payload.brand.includes(car.brand) ||
            action.payload.brand.length < 1) &&
          (car.type.includes(action.payload.type) || action.payload.type === '')
        );
      });
    },
    setCars: (state, action: PayloadAction<TCar[]>) => {
      state.cars = action.payload;
      state.filteredCars = action.payload;
    },
  },
});

export default filterCars.reducer;
export const { allFilters, setCars } = filterCars.actions;
