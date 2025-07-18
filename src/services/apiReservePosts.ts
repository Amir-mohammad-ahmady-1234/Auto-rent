import { supabase } from './supabase'; 

interface Reservation {
  deliveryDate: string;
  deliveryTime: string;
  userPhone: string;
  pickupLocation: string;
  rentalDays: number;
  rentalType: string;
  returnDate: string;
  returnLocation: string;
  returnTime: string;
  adress: string;
  email: string;
  lastName: string;
  name: string;
  nationalCode: string;
  totalAmount: number;
  mainCar_id: string;
  mainUser_id: number;
}

export async function insertReservation(reservation: Reservation) {
  const { data, error } = await supabase
    .from('reservations')
    .insert([reservation]);

  if (error) throw new Error(error.message);
  return data;
}
