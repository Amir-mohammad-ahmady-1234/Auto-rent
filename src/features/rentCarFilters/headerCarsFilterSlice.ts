import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CarsState } from '../../types/filterCarType';
import type { TCar } from '../../types/CarType';

const initialState: CarsState = {
  filteredCars: [],
  cars: [],
};

const filterPrice = createSlice({
  name: 'filterPrice',
  initialState,
  reducers: {
    filterByPrice: (state, action: PayloadAction<string>) => {
      const isRange = action.payload.split(',').length > 1;
      const [min, max] = action.payload.split(',').map(Number);

      state.filteredCars = state.cars.filter((car) => {
        return (
          (isRange
            ? +car.dailyPrice <= max && +car.dailyPrice >= min
            : min <= 5000000
              ? +car.dailyPrice <= min
              : +car.dailyPrice >= min) || !min
        );
      });
    },
    setCars: (state, action: PayloadAction<TCar[]>) => {
      state.cars = action.payload;
      state.filteredCars = action.payload;
    },
  },
});

export default filterPrice.reducer;
export const { filterByPrice, setCars } = filterPrice.actions;
