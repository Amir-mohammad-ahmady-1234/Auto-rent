// HeaderCarsFilter.tsx
import { HeaderPriceFilter } from '../../components/cars/header cars filter/HeaderPriceFilter';
import { HeaderCarsFilter } from '../../components/cars/header cars filter/HeaderCarsFilter.1';

export default function FiltersWrapper() {
  return (
    <div className="flex flex-wrap items-center justify-end gap-4">
      <HeaderPriceFilter />
      <HeaderCarsFilter />
    </div>
  );
}
