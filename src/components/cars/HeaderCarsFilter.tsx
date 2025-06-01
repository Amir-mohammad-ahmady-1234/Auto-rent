// HeaderCarsFilter.tsx
import { HeaderPriceFilter } from './HeaderPriceFilter';
import { HeaderCarsFilter } from './HeaderCarsFilter.1';

export default function FiltersWrapper() {
  return (
    <div className="flex flex-wrap items-center justify-end gap-4">
      <HeaderPriceFilter />
      <HeaderCarsFilter />
    </div>
  );
}
