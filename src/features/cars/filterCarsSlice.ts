import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { carsData } from '../../data/carsData';
import type { TCar } from '../../types/CarType';

interface CarsState {
  filteredCars: TCar[];
}

interface IPayload {
  price: string;
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
          (action.payload.brand.includes(car.brand) ||
            action.payload.brand.length < 1) &&
          (action.payload.type.includes(car.type) || action.payload.type === '')
        );
      });
    },
  },
});

export default filterCars.reducer;
export const { allFilters } = filterCars.actions;
