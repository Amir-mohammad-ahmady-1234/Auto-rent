// تابع تبدیل عدد به فارسی
export const toPersianNumbers = (num: string | number) => {
  return num.toString().replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[parseInt(d)]);
};