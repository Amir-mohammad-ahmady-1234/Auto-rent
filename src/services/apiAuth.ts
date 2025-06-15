import { supabase } from './supabase';

export const signInWithPhone = async (phone: string) => {
  const { error } = await supabase.auth.signInWithOtp({
    phone,
  });

  if (error) throw new Error(error.message);
};

export const verifyOtpCode = async (phone: string, otp: string) => {
  const { data, error } = await supabase.auth.verifyOtp({
    phone,
    token: otp,
    type: 'sms',
  });

  if (error) throw new Error(error.message);
  return data;
};
