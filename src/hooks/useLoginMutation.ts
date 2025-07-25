import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { sendTestOtp, verifyTestOtp } from '../services/apiAuth';

export const useSendOtp = () => {
  return useMutation({
    mutationFn: (phone: string) => sendTestOtp(phone),
    onSuccess: () => toast.success('کد تایید با موفقیت ارسال شد'),
    onError: (err: unknown) => {
      const message = err instanceof Error ? err.message : 'خطا در ارسال کد';
      toast.error(message);
    },
  });
};

export const useVerifyOtp = () => {
  return useMutation({
    mutationFn: ({ phone, otp }: { phone: string; otp: string }) =>
      verifyTestOtp(phone, otp),
    onSuccess: () => toast.success('احراز هویت با موفقیت انجام شد'),
    onError: (err: unknown) => {
      const message =
        err instanceof Error ? err.message : 'کد وارد شده صحیح نیست';
      toast.error(message);
    },
  });
};
