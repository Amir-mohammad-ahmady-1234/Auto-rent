import type { RootState } from "../../app/store";

export const selectFullyFilteredCars = (state: RootState) => {
  const categoryFiltered = state.filterCars.filteredCars;
  const priceFiltered = state.filterPrice.filteredCars;

  return categoryFiltered.filter((car) =>
    priceFiltered.some((c) => c.id === car.id)
  );
};
