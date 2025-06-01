import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { carsData } from '../../data/carsData';
import type { CarsState } from '../../types/filterCarType';

const initialState: CarsState = {
  filteredCars: carsData,
};

const filterPrice = createSlice({
  name: 'filterPrice',
  initialState,
  reducers: {
    filterByPrice: (state, action: PayloadAction<string>) => {
      const isRange = action.payload.split(',').length > 1;
      const [min, max] = action.payload.split(',').map(Number);

      state.filteredCars = carsData.filter((car) => {
        return (
          (+car.dailyPrice >= min &&
            (isRange ? +car.dailyPrice <= max : true)) ||
          !min
        );
      });
    },
  },
});

export default filterPrice.reducer;
export const { filterByPrice } = filterPrice.actions;
