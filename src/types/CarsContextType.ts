import type { TCar } from './CarType.ts';

export interface CarsContextType {
  cars: TCar[];
  error: Error | null;
  isLoading: boolean;
}
