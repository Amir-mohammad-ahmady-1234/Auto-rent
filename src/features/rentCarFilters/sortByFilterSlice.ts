import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CarsState } from '../../types/filterCarType';
import type { TCar } from '../../types/CarType';

const initialState: CarsState = {
  filteredCars: [],
  cars: [],
};

const sortByFiler = createSlice({
  name: 'sortFilter',
  initialState,
  reducers: {
    sortByHighPrice: (state) => {
      const carsLength = state.cars.length;
      state.filteredCars = [...state.cars]
        .sort((a, b) => {
          return +b.dailyPrice - +a.dailyPrice;
        })
        .slice(0, carsLength < 5 ? 1 : 3);
    },
    sortByLowPrice: (state) => {
      const carsLength = state.cars.length;
      state.filteredCars = [...state.cars]
        .sort((a, b) => {
          return +a.dailyPrice - +b.dailyPrice;
        })
        .slice(0, carsLength < 5 ? 1 : 3);
    },
    sortByNewYear: (state) => {
      const carsLength = state.cars.length;
      state.filteredCars = [...state.cars]
        .sort((a, b) => {
          return +b.model - +a.model;
        })
        .slice(0, carsLength < 5 ? 1 : 3);
    },
    sortByOldYear: (state) => {
      const carsLength = state.cars.length;
      state.filteredCars = [...state.cars]
        .sort((a, b) => {
          return +a.model - +b.model;
        })
        .slice(0, carsLength < 5 ? 1 : 3);
    },
    resetSort: (state) => {
      state.filteredCars = state.cars;
    },
    setCars: (state, action: PayloadAction<TCar[]>) => {
      state.cars = action.payload;
      state.filteredCars = action.payload;
    },
  },
});

export default sortByFiler.reducer;
export const {
  sortByHighPrice,
  sortByLowPrice,
  sortByNewYear,
  sortByOldYear,
  resetSort,
  setCars,
} = sortByFiler.actions;
