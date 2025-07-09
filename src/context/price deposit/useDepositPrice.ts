import { useContext } from 'react';
import { DepositPriceContext } from './DepositPriceContext';

export const useDepositPrice = () => {
  const context = useContext(DepositPriceContext);

  if (!context)
    throw new Error(
      'useDepositPrice must be used within a DepositPriceProvider'
    );

  return context;
};
