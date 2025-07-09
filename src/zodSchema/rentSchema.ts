import { z } from 'zod';

export const schema = z.object({
  rentalType: z.string().min(1, 'انتخاب نوع خودرو الزامی است'),
  rentalDays: z.coerce
    .number({
      required_error: 'تعداد روز الزامی است',
      invalid_type_error: 'تعداد روز باید عدد باشد',
    })
    .min(1, { message: 'حداقل یک روز لازم است' }),

  deliveryDate: z
    .any()
    .refine(
      (val) =>
        val !== null &&
        typeof val === 'object' &&
        typeof val.year === 'number' &&
        val.year >= 1000 &&
        val.year <= 9999 &&
        typeof val.month === 'object' &&
        typeof val.month.number === 'number' &&
        val.month.number >= 1 &&
        val.month.number <= 12 &&
        typeof val.day === 'number' &&
        val.day >= 1 &&
        val.day <= 31,
      {
        message: 'تاریخ تحویل رو وارد کن!',
      }
    ),
  returnDate: z
    .any()
    .refine(
      (val) =>
        val !== null &&
        typeof val === 'object' &&
        typeof val.year === 'number' &&
        val.year >= 1000 &&
        val.year <= 9999 &&
        typeof val.month === 'object' &&
        typeof val.month.number === 'number' &&
        val.month.number >= 1 &&
        val.month.number <= 12 &&
        typeof val.day === 'number' &&
        val.day >= 1 &&
        val.day <= 31,
      {
        message: 'تاریخ برگشت رو وارد کن!',
      }
    ),
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
  rentalDays: 1,
  deliveryDate: null,
  returnDate: null,
  deliveryTime: '',
  returnTime: '',
  pickupLocation: 'انتخاب کنید',
  returnLocation: 'انتخاب کنید',
};

export type SchemaFormValues = z.infer<typeof schema>;
