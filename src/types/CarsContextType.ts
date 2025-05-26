import type { TCar } from "./CarType.ts";

export interface CarsContextType {
  cars: TCar[];
  setCars: React.Dispatch<React.SetStateAction<TCar[]>>;
}