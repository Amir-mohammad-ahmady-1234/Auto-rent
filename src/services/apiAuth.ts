import { supabase } from './supabase';

export async function sendTestOtp(phone: string): Promise<string> {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expires_at = new Date(Date.now() + 2 * 60 * 1000).toISOString(); // 2 دقیقه بعد

  const { error } = await supabase.from('test_otps').upsert(
    { phone, code: otp, expires_at, attempts: 0 }
    // { onConflict: 'code' }
  );

  if (error) {
    throw new Error(' . otp خطا در تولید کد ');
  }
  return otp;
}

export async function verifyTestOtp(
  phone: string,
  otpInput: string
): Promise<boolean> {
  const { data, error } = await supabase
    .from('test_otps')
    .select('code, expires_at, attempts')
    .eq('phone', phone)
    .single();

  if (error || !data) {
    throw new Error('کدی برای این شماره یافت نشد. ابتدا درخواست کد بده.');
  }
  const now = new Date();
  if (new Date(data.expires_at) < now) {
    await supabase.from('test_otps').delete().eq('phone', phone);
    throw new Error('کد منقضی شده است. دوباره درخواست کد بده.');
  }
  if (data.attempts >= 5) {
    throw new Error('تعداد تلاش‌های مجاز تمام شده. دوباره درخواست کد بده.');
  }
  if (data.code !== otpInput) {
    await supabase
      .from('test_otps')
      .update({ attempts: data.attempts + 1 })
      .eq('phone', phone);
    const remaining = 5 - (data.attempts + 1);
    throw new Error(`کد اشتباه است. ${remaining} بار فرصت دیگر.`);
  }
  await supabase.from('test_otps').delete().eq('phone', phone);
  return true;
}

export async function addUser(
  phone: string,
  setPhone: React.Dispatch<React.SetStateAction<string | null>>,
  login: (phone: string) => void
): Promise<void> {
  const { error } = await supabase.from('users').insert({ phone });
  if (error) {
    throw new Error('خطا در افزودن کاربر');
  }

  localStorage.setItem('phoneNumber', phone);

  setPhone(phone);
  login(phone);
}
export const getLatestOtpCode = async (phone: string) => {
  const normalizeTo989 = (num: string) => {
    if (num.startsWith('+98')) return num.slice(1);
    if (num.startsWith('0')) return '98' + num.slice(1);
    if (num.startsWith('98')) return num;
    return num;
  };

  const possiblePhones = [
    normalizeTo989(phone),
    phone.startsWith('0') ? phone.slice(1) : null,
    phone.startsWith('+98') ? phone.slice(3) : null,
  ].filter(Boolean) as string[];

  for (const p of possiblePhones) {
    const { data, error } = await supabase
      .from('test_otps')
      .select('code')
      .eq('phone', p)
      .order('expires_at', { ascending: false })
      .limit(1);

    if (!error && data?.[0]) {
      return data[0].code;
    }
  }

  throw new Error('کدی یافت نشد');
};

export async function getUserId(phone: string | null) {
  const { data: id, error } = await supabase
    .from('users')
    .select('id')
    .eq('phone', phone)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return id.id;
}
