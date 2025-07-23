export function convertDateToPersian(date: Date) {
  const today = new Date();

  const oneDay = 24 * 60 * 60 * 1000;
  const diffDays = Math.floor((today.getTime() - date.getTime()) / oneDay);

  if (diffDays === 0) {
    return 'امروز';
  } else if (diffDays === 1) {
    return 'دیروز';
  } else if (diffDays > 1) {
    return `${diffDays} روز پیش`;
  } else {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Intl.DateTimeFormat('fa-IR', options).format(date);
  }
}

function persianToEnglishNumbers(str: string) {
  return str.replace(/[۰-۹]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d).toString());
}

export function convertDateToPersianString(jalaliDateStr: string) {
  const enStr = persianToEnglishNumbers(jalaliDateStr);
  const [year, month, day] = enStr.split('/').map(Number);

  const months = [
    '',
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
  ];

  return `${day} ${months[month]} ${year}`;
}
