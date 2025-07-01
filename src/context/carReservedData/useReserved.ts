import { useContext } from 'react';
import { ReservedContext } from './ReservedContext';

export const useReservedInfo = () => useContext(ReservedContext);
