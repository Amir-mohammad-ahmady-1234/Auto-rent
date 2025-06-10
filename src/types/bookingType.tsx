export type TBooking = {
  id: string;
  userId: string;
  carId: number,
  startDate: string;
  endDate: string;
  insuranceType: 'basic' | 'full';
  price: number;
};
