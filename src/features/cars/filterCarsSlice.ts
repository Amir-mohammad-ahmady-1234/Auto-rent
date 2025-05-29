import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { carsData } from '../../data/carsData';
import type { TCar } from '../../types/CarType';

interface carsState {
  filteredCars: TCar[];
}

const initialState: carsState = { filteredCars: carsData };

const filterCars = createSlice({
  name: 'filterCars',
  initialState,
reducers: {
    changePrice: (state, action: PayloadAction<string>) => {
      state.filteredCars = carsData.filter((cars) => +cars.dailyPrice >= +action.payload);
    },
  },
});

export default filterCars.reducer;
export const { changePrice } = filterCars.actions;
