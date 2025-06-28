import { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { supabase } from '../../services/supabase';
import { useAuth } from '../../context/Auth/useAuth';
import { addUser } from '../../services/apiAuth';

interface Props {
  phone: string;
  otp: string;
  setOtp: (value: string) => void;
}

const OtpForm = ({ phone, otp, setOtp }: Props) => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(120);
  const [isResendAvailable, setIsResendAvailable] = useState(false);
  const [attemptsLeft, setAttemptsLeft] = useState(5);
  const { setPhone, login } = useAuth();

  const { mutate: verifyOtp, isPending } = useMutation({
    mutationFn: async () => {
      // گرفتن آخرین OTP ثبت شده برای این شماره
      const { data, error } = await supabase
        .from('test_otps')
        .select('*')
        .eq('phone', phone)
        .order('expires_at', { ascending: false })
        .limit(1);

      if (error) throw new Error(error.message);

      const otpFromDb = data?.[0]?.code;

      // مقایسه OTP وارد شده با دیتابیس
      if (otp !== otpFromDb) {
        throw new Error('کد وارد شده اشتباه است');
      }

      // اگر برابر بود -> درج در جدول users
      addUser(phone, setPhone, login);
      
      // if (insertError) throw new Error(insertError.message);

      return data;
    },

    onSuccess: () => {
      toast.success('ورود با موفقیت انجام شد');
      navigate(-1);
    },
    onError: (err: unknown) => {
      setAttemptsLeft((prev) => prev - 1);
      const msg = err instanceof Error ? err.message : 'خطایی رخ داد';
      toast.error(`${msg} | تلاش‌های باقی‌مانده: ${attemptsLeft - 1}`);

      if (attemptsLeft - 1 <= 0) {
        toast.error('تلاش‌های شما تمام شد! لطفاً کد جدید دریافت کنید.');
      }
    },
  });

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else {
      setIsResendAvailable(true);
    }
  }, [timer]);

  const handleChange = (value: string) => {
    if (/^\d*$/.test(value)) setOtp(value);
  };

  const handleResendCode = async () => {
    setTimer(120);
    setIsResendAvailable(false);
    setAttemptsLeft(5);

    const { error } = await supabase.auth.signInWithOtp({ phone });

    if (error) {
      toast.error('خطا در ارسال مجدد کد');
    } else {
      toast.success('کد جدید ارسال شد');
    }
  };

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h2 className="text-center text-xl font-semibold md:text-2xl">
        کد تأیید را وارد کنید
      </h2>
      <p className="text-center text-sm leading-relaxed text-gray-600 md:text-base">
        کد به شماره وارد شده پیامک شده است.
      </p>

      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={6}
        shouldAutoFocus
        inputType="tel"
        renderInput={(props) => (
          <input
            {...props}
            className="h-14 w-14 rounded-xl border border-gray-300 text-center text-lg focus:border-blue-600 focus:outline-none md:h-16 md:w-16 md:text-xl"
          />
        )}
        containerStyle="flex justify-center gap-3 md:gap-4"
      />

      <div className="flex items-center gap-40">
        <button
          onClick={() => location.reload()}
          className="text-sm text-blue-500 hover:text-blue-700"
        >
          بازگشت
        </button>

        <div className="text-center text-sm text-gray-600">
          {isResendAvailable ? (
            <button
              onClick={handleResendCode}
              className="text-blue-600 hover:underline"
            >
              ارسال مجدد کد
            </button>
          ) : (
            <span>
              امکان ارسال مجدد تا{' '}
              <span className="text-blue-600">{formatTime(timer)}</span>
            </span>
          )}
        </div>
      </div>

      <button
        disabled={otp.length !== 6 || isPending || attemptsLeft <= 0}
        onClick={() => verifyOtp()}
        className={`w-full rounded-md py-2 text-sm transition md:text-base ${
          otp.length !== 6 || isPending || attemptsLeft <= 0
            ? 'cursor-not-allowed bg-gray-300 text-gray-500'
            : 'cursor-pointer bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        {isPending ? 'در حال بررسی...' : 'تأیید کد'}
      </button>
    </div>
  );
};

export default OtpForm;
