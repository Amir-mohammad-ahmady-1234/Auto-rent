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
