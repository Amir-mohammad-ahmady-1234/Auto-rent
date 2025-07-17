export function convertDateToPersian(date: Date) {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const persianDate = new Intl.DateTimeFormat('fa-IR', options).format(date);
  return persianDate;
}
