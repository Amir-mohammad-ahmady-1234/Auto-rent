import React from 'react';
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

const DepositPricePrivider = ({ children }: { children: React.ReactNode }) => {
  const convertToPriceItems = (data: DataType) => {
    const {
      cars: { dailyPrice },
      deposit_amount,
      license_deposit,
      origin_delivery_fee,
      return_delivery_fee,
      tax_percent,
    } = data;

    const totalPrice =
      (+dailyPrice + origin_delivery_fee + return_delivery_fee) *
      (1 + tax_percent / 100); // مجوع هزینه

    const totalWithDeposit = totalPrice + deposit_amount + license_deposit; // مجوع هزینه به همراه ودیعه ( و ودیعه راهنمایی رانندگی )
    // i should create a context for calculate and save deposit & prices => DepositPriceContext - DepositPriceProvider - useDpositPrice
    return [
      { label: 'هزینه روزانه', amount: dailyPrice },
      { label: 'تحویل در محل مبدا', amount: origin_delivery_fee },
      { label: 'تحویل در محل بازگشت', amount: return_delivery_fee },
      { label: 'مالیات', amount: tax_percent },
      { label: 'مجموع هزینه', amount: totalPrice },
      { label: 'ودیعه', amount: deposit_amount },
      { label: 'ودیعه راهنمایی رانندگی', amount: license_deposit },
      { label: 'مجموع هزینه بهمراه ودیعه', amount: totalWithDeposit },
    ];
  };

  return (
    <DepositPriceContext.Provider value={{ convertToPriceItems }}>
      {children}
    </DepositPriceContext.Provider>
  );
};

export default DepositPricePrivider;
