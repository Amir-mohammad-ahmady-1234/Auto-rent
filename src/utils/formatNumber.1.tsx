export const toPersianDigits = (input: string): string => {
  return input.replace(/\d/g, (digit) => '۰۱۲۳۴۵۶۷۸۹'[+digit]);
};
const addCommas = (input: string): string => {
  return input.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatNumber = (value: number | string): string => {
  const str = value.toString();
  return toPersianDigits(addCommas(str));
};
