import { supabase } from './supabase';

// ارسال OTP تستی: تولید کد، ذخیره در test_otps، بازنشانی attempts
export async function sendTestOtp(phone: string): Promise<string> {
  // تولید کد 6 رقمی تصادفی
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expires_at = new Date(Date.now() + 2 * 60 * 1000).toISOString(); // 2 دقیقه بعد

  // درج یا به‌روزرسانی: attempts را صفر می‌کنیم
  const { error } = await supabase.from('test_otps').upsert(
    { phone, code: otp, expires_at, attempts: 0 }
    // { onConflict: 'code' }
  );

  if (error) {
    throw new Error(' . otp خطا در تولید کد ');
  }
  // برگرداندن کد برای نمایش با toast
  return otp;
}

// تأیید OTP تستی: خواندن ردیف، بررسی attempts و expires_at و کد
export async function verifyTestOtp(
  phone: string,
  otpInput: string
): Promise<boolean> {
  // خواندن ردیف
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
    // منقضی: پاکش کن
    await supabase.from('test_otps').delete().eq('phone', phone);
    throw new Error('کد منقضی شده است. دوباره درخواست کد بده.');
  }
  if (data.attempts >= 5) {
    throw new Error('تعداد تلاش‌های مجاز تمام شده. دوباره درخواست کد بده.');
  }
  if (data.code !== otpInput) {
    // اشتباه: attempts را +1 کن
    await supabase
      .from('test_otps')
      .update({ attempts: data.attempts + 1 })
      .eq('phone', phone);
    const remaining = 5 - (data.attempts + 1);
    throw new Error(`کد اشتباه است. ${remaining} بار فرصت دیگر.`);
  }
  // اگر درست بود: پاکسازی ردیف و بازگرداندن موفقیت
  await supabase.from('test_otps').delete().eq('phone', phone);
  return true;
}

// افزودن کاربر به جدول users بعد از تأیید موفق
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
  // حذف + و 0 ابتدای شماره، فقط عدد 989xxxxxxxxx
  const normalizeTo989 = (num: string) => {
    if (num.startsWith('+98')) return num.slice(1); // حذف + فقط میمونه 989xxx
    if (num.startsWith('0')) return '98' + num.slice(1); // حذف 0 و اضافه کردن 98
    if (num.startsWith('98')) return num; // فرمت درست
    return num; // اگه چیز دیگه‌ای بود
  };

  const possiblePhones = [
    normalizeTo989(phone),
    // به صورت پیش‌فرض ممکنه بخوای بدون 98 هم جستجو کنی (مثلا 9124167380)
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
