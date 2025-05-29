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
      state.filteredCars = carsData.filter(
        (car) => +car.dailyPrice >= +action.payload
      );
    },
    filterBrand: (state, action: PayloadAction<string[]>) => {
      if (action.payload.length < 1) {
        state.filteredCars = carsData;
      } else {
        state.filteredCars = carsData.filter((car) =>
          action.payload.includes(car.brand)
        );
      }
    },
  },
});

export default filterCars.reducer;
export const { changePrice, filterBrand } = filterCars.actions;
