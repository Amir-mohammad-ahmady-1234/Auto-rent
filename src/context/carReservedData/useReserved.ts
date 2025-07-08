import { useContext } from 'react';
import { ReservedContext } from './ReservedContext';

export const useReservedInfo = () => {
  const context = useContext(ReservedContext);

  if (!context) throw new Error('useReservedInfo must be used within Provider');

  return context
};
