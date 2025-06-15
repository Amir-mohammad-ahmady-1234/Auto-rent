function validatePhone(value: string): boolean {
  const digitsOnly = value.replace(/\D/g, '');

  if (
    value.startsWith('+98') ||
    value.startsWith('98') ||
    value.startsWith('09')
  ) {
    const normalized = value.startsWith('0')
      ? '98' + digitsOnly.slice(1)
      : digitsOnly.startsWith('98')
        ? digitsOnly
        : digitsOnly;

    return /^98[9]\d{9}$/.test(normalized);
  }

  return /^\+?[1-9]\d{7,14}$/.test(value);
}


export { validatePhone };
