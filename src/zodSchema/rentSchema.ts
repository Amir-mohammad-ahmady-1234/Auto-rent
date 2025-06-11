import { z } from 'zod';

export const schema = z.object({
  rentalType: z.string().min(1, 'انتخاب نوع خودرو الزامی است'),
  deliveryDate: z.date({
    required_error: 'انتخاب تاریخ شروع اجاره الزامی است',
  }),
  returnDate: z.date({ required_error: 'انتخاب تاریخ پایان رزرو الزامی است' }),
  deliveryTime: z.string().min(1, 'انتخاب ساعت شروع رزرو الزامی است'),
  returnTime: z.string().min(1, 'انتخاب ساعت پایان رزرو الزامی است'),
  deliveryLocation: z
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

export type SchemaFormValues = z.infer<typeof schema>;
