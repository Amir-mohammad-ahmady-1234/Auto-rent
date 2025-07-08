import { supabase } from './supabase';

export async function getCarFullDetails(carId: string | undefined) {
  const { data, error } = await supabase
    .from('cars-diposit')
    .select(
      `
      *,
      cars (
        dailyPrice
      )
    `
    )
    .eq('id', carId)
    .single();

  if (error) {
    console.error('💀 ارور در دریافت مشخصات ماشین:', error);
    return null;
  }

  console.log('🔥 مشخصات کامل ماشین:', data);
  return data;
}
