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
        .slice(0, 2).reverse();
    },
    sortByYear: (state, action: PayloadAction<string>) => {},
  },
});

export default sortByFiler.reducer;
export const { sortByHighPrice } = sortByFiler.actions;
