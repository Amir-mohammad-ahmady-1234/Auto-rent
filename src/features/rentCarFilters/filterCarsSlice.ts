import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { carsData } from '../../data/carsData';
import type { CarsState } from '../../types/filterCarType';

interface IPayload {
  price: string;
  maxPrice: string;
  brand: string[];
  type: string;
}

const initialState: CarsState = { filteredCars: carsData };

const filterCars = createSlice({
  name: 'filterCars',
  initialState,
  reducers: {
    // payload types : price: string,brand: array, type: string
    allFilters: (state, action: PayloadAction<IPayload>) => {
      state.filteredCars = carsData.filter((car) => {
        return (
          +car.dailyPrice >= +action.payload.price &&
          +car.dailyPrice <= +action.payload.maxPrice &&
          (action.payload.brand.includes(car.brand) ||
            action.payload.brand.length < 1) &&
          (car.type.includes(action.payload.type) || action.payload.type === '')
        );
      });
    },
  },
});

export default filterCars.reducer;
export const { allFilters } = filterCars.actions;
