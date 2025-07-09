import { createContext } from 'react';
import type { DataType } from './DepositPricePrivider';

export const DepositPriceContext = createContext<null | {
  convertToPriceItems: (
    data: DataType,
    rentalDays: number,
    setTotalAmount: React.Dispatch<React.SetStateAction<number>>
  ) => (
    | { label: string; amount: string }
    | { label: string; amount: number }
  )[];
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  totalAmount: number;
  setTotalAmount: React.Dispatch<React.SetStateAction<number>>;
}>(null);
