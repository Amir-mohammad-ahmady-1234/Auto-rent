import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { carsData } from '../../data/carsData';
import type { CarsState } from '../../types/filterCarType';

const initialState: CarsState = {
  filteredCars: carsData,
};

const sortByFiler = createSlice({
  name: 'sortFilter',
  initialState,
  reducers: {
    sortByHighPrice: (state) => {
      state.filteredCars = [...carsData]
        .sort((a, b) => {
          return +b.dailyPrice - +a.dailyPrice;
        })
        .slice(0, 3);
    },
    sortByLowPrice: (state) => {
      state.filteredCars = [...carsData]
        .sort((a, b) => {
          return +a.dailyPrice - +b.dailyPrice;
        })
        .slice(0, 3);
    },
    sortByNewYear: (state) => {
      state.filteredCars = [...carsData]
        .sort((a, b) => {
          return +b.model - +a.model;
        })
        .slice(0, 3);
    },
    sortByOldYear: (state) => {
      state.filteredCars = [...carsData]
        .sort((a, b) => {
          return +a.model - +b.model;
        })
        .slice(0, 3);
    },
  },
});

export default sortByFiler.reducer;
export const { sortByHighPrice, sortByLowPrice, sortByNewYear, sortByOldYear } =
  sortByFiler.actions;
