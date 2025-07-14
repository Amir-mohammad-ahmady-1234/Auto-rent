import { supabase } from './supabase';

export async function delteUserAcc(phone: string | null) {
  await supabase.from('test_otps').delete().eq('phone', phone);
  await supabase.from('users').delete().eq('phone', phone);
}
