import { createContext } from 'react';
import type { DataType } from './DepositPricePrivider';

export const DepositPriceContext = createContext<null | {
  convertToPriceItems: (
    data: DataType
  ) => (
    | { label: string; amount: string }
    | { label: string; amount: number }
  )[];
}>(null);
