// src/utils/formatNumber.tsx

import React from 'react';
import { formatNumber } from './formatNumber.1';

type Props = {
  value: number | string;
  withSuffix?: string; // مثلاً "تومان" یا "عدد"
  className?: string;
};

const FormattedNumber: React.FC<Props> = ({ value, withSuffix, className }) => {
  const formatted = formatNumber(value);
  return (
    <span className={className}>
      {formatted}
      {withSuffix && ` ${withSuffix}`}
    </span>
  );
};

export default FormattedNumber;
