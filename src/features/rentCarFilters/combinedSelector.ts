import { createSelector } from 'reselect';
import type { RootState } from '../../app/store';

const selectCategoryFilteredCars = (state: RootState) =>
  state.filterCars.filteredCars;
const selectPriceFilteredCars = (state: RootState) =>
  state.filterPrice.filteredCars;
const selectSortedFilteredCars = (state: RootState) => state.filterBySort.filteredCars;

export const selectFullyFilteredCars = createSelector(
  [
    selectCategoryFilteredCars,
    selectPriceFilteredCars,
    selectSortedFilteredCars,
  ],
  (categoryFiltered, priceFiltered, sortedFiltered) => {
    return categoryFiltered
      .filter((car) => priceFiltered.some((c) => c.id === car.id))
      .filter((car) => sortedFiltered.some((c) => c.id === car.id)).reverse();
  }
);
