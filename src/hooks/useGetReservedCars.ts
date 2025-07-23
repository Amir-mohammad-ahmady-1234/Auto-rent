import { useQuery } from '@tanstack/react-query';
import { getReservedCars } from '../services/apiGetReservedCars';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { useEffect } from 'react';

export const useGetReservedCars = () => {
  const phone = localStorage.getItem('phoneNumber');
  const navigate = useNavigate();

  useEffect(() => {
    if (!phone) {
      navigate('login');
      toast.error('ابتدا وارد حساب خود شوید');
    }
  }, [phone, navigate]);

  const {
    data: reservations,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['reservations'],
    queryFn: () => getReservedCars(phone ?? ''),
    enabled: !!phone,
  });

  return { reservations, error, isLoading };
};
