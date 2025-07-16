import { supabase } from './supabase';

export const getAllBlogs = async () => {
  const { data: blogs, error } = await supabase.from('blogs').select('*');

  if (error) {
    throw new Error(error.message);
  }

  return blogs || []; // if can not get blogs => returned empty array
};
