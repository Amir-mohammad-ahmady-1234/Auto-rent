import { supabase } from './supabase';

export const changeUserName = async ({
  newName,
  phone,
}: {
  newName: string;
  phone: string;
}) => {
  const { data, error } = await supabase
    .from('users')
    .update({ name: newName })
    .eq('phone', phone)
    .select();

  if (error) throw new Error(error.message);

  return data || '';
};
