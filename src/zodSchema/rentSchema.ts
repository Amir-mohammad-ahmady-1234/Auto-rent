import { number } from 'framer-motion';
import { z } from 'zod';

export const schema = z.object({
  rentalType: z.string().min(1, 'انتخاب نوع خودرو الزامی است'),
  deliveryDate: z
    .any()
    .refine((val) => val instanceof Date && !isNaN(val.getTime()), {
      message: 'تاریخ تحویل رو وارد کن!',
    }),
  returnDate: z
    .any()
    .refine((val) => val instanceof Date && !isNaN(val.getTime()), {
      message: 'تاریخ برگشت رو وارد کن!',
    }),
  deliveryTime: z.string().min(1, 'انتخاب ساعت شروع رزرو الزامی است'),
  returnTime: z.string().min(1, 'انتخاب ساعت پایان رزرو الزامی است'),
  pickupLocation: z
    .string()
    .min(1, 'انتخاب محل تحویل خودرو الزامی است')
    .refine((val) => val !== 'انتخاب کنید', {
      message: 'انتخاب محل تحویل خودرو الزامی است',
    }),
  returnLocation: z
    .string()
    .min(1, 'انتخاب محل بازگشت خودرو الزامی است')
    .refine((val) => val !== 'انتخاب کنید', {
      message: 'انتخاب محل بازگشت خودرو الزامی است',
    }),
});

export const defaultValues = {
  rentalType: 'اجاره خودرو با راننده',
  deliveryTime: '',
  returnTime: '',
  deliveryDate: null,
  returnDate: null,
  pickupLocation: 'انتخاب کنید',
  returnLocation: 'انتخاب کنید',
  phone: number,
};

export type SchemaFormValues = z.infer<typeof schema>;
