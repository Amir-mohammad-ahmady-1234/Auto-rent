import { supabase } from './supabase';

export async function getCars() {
  const { data: cars, error } = await supabase.from('cars').select('*');

  if (error) {
    throw new Error(error.message);
  }

  return cars || [];
}
