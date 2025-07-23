import { getUserId } from './apiAuth';
import { supabase } from './supabase';

export const getReservedCars = async (phone: string) => {
  const mainUser_id = await getUserId(phone);

  const { data, error } = await supabase
    .from('reservations')
    .select(
      `
        *,
        cars ( image, title, brand,model )
        `
    )
    .eq('mainUser_id', mainUser_id);

  if (error) {
    throw new Error(error.message);
  }

  return data || [];
};
