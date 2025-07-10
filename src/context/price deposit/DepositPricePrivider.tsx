import React, { useState } from 'react';
import { DepositPriceContext } from './DepositPriceContext';
import type { TCar } from '../../types/CarType';

export interface DataType {
  cars: TCar;
  deposit_amount: number;
  license_deposit: number;
  origin_delivery_fee: number;
  return_delivery_fee: number;
  tax_percent: number;
}

const convertToPriceItems = (
  data: DataType,
  rentalDays: number,
  setTotalAmount: React.Dispatch<React.SetStateAction<number>>,
  selectedOption: string
) => {
  const {
    cars: { dailyPrice },
    deposit_amount,
    license_deposit,
    origin_delivery_fee,
    return_delivery_fee,
    tax_percent,
  } = data;

  const totalPrice = Math.round(
    (+dailyPrice * rentalDays + origin_delivery_fee + return_delivery_fee) *
      (1 + tax_percent / 100)
  ); // مجوع هزینه

  const totalWithDeposit = totalPrice + deposit_amount + license_deposit; // مجوع هزینه به همراه ودیعه ( و ودیعه راهنمایی رانندگی )

  if (selectedOption === 'reservation_only' || selectedOption === '')
    setTotalAmount(totalWithDeposit);
  else if (selectedOption === 'defer_deposit') setTotalAmount(totalPrice);
  else if (selectedOption === 'cash_and_check')
    setTotalAmount(totalWithDeposit - (deposit_amount + license_deposit) / 2);

  return [
    { label: 'هزینه روزانه', amount: dailyPrice },
    { label: 'تعداد روز اجاره', amount: rentalDays },
    { label: 'تحویل در محل مبدا', amount: origin_delivery_fee },
    { label: 'تحویل در محل بازگشت', amount: return_delivery_fee },
    { label: 'مالیات', amount: tax_percent },
    { label: 'مجموع هزینه', amount: totalPrice },
    { label: 'ودیعه', amount: deposit_amount },
    { label: 'ودیعه راهنمایی رانندگی', amount: license_deposit },
    { label: 'مجموع هزینه بهمراه ودیعه', amount: totalWithDeposit },
  ];
};

const DepositPricePrivider = ({ children }: { children: React.ReactNode }) => {
  const [selectedOption, setSelectedOption] = useState<string>(''); // حالات ممکن: defer_deposit , cash_and_check , reservation_only
  const [totalAmount, setTotalAmount] = useState(0);

  return (
    <DepositPriceContext.Provider
      value={{
        convertToPriceItems,
        selectedOption,
        setSelectedOption,
        totalAmount,
        setTotalAmount,
      }}
    >
      {children}
    </DepositPriceContext.Provider>
  );
};

export default DepositPricePrivider;
