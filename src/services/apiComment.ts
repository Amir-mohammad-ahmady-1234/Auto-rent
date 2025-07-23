import { supabase } from './supabase';

type AddCommentProps = {
  mainCar_id: string;
  avatar: string;
  text: string;
  phone: string;
};

export const getAllComments = async (currentCarId: string) => {
  const { data, error } = await supabase
    .from('comments')
    .select('*')
    .eq('mainCar_id', currentCarId);

  if (error) {
    throw new Error(error.message);
  }

  return data || [];
};

export const getAllUserCommenteds = async (
  userPhoneOrName: string,
  name: string
) => {
  const { data, error } = await supabase
    .from('comments')
    .select('*')
    .in('phone', [userPhoneOrName, name]);

  if (error) {
    throw new Error(error.message);
  }

  return data || [];
};

export const sendComment = async ({
  mainCar_id,
  avatar,
  text,
  phone,
}: AddCommentProps) => {
  const { data, error } = await supabase
    .from('comments')
    .insert([{ avatar, text, mainCar_id, phone }]);

  if (error) {
    throw new Error(error.message);
  }

  return data || [];
};
