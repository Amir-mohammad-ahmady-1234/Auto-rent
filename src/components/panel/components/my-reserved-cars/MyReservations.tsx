import { useGetReservedCars } from '../../../../hooks/useGetReservedCars';
import FullPageLoading from '../../../../ui/FullPageLoading';
import { Error } from '../Error';
import { ReservationCard } from './ReservationCard';
import { ReservationStatusCard } from './ReservationStatusCard';

export default function MyReservations() {
  const handleViewDetails = (reservationId?: string) => {
    console.log('View details clicked', reservationId);
  };

  const { reservations, isLoading, error } = useGetReservedCars();

  if (isLoading) return <FullPageLoading />;

  if (error) {
    console.log(error.message);
    return (
      <Error message="خطا در دریافت ماشین های اجاره شده ی شما. لطفا دوباره تلاس کنید" />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6" dir="ltr">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-2xl font-bold text-gray-900">رزروهای من</h1>
        </div>

        {/* Status Cards */}
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <ReservationStatusCard
            title="لغو شده"
            count={0}
            variant="cancelled"
          />
          <ReservationStatusCard
            title="انجام شده"
            count={reservations?.length ?? 0}
            variant="completed"
          />
          <ReservationStatusCard title="جاری" count={0} variant="current" />
        </div>

        {/* Reservations List */}
        <div className="space-y-4">
          {reservations?.map((reservation) => (
            <ReservationCard
              key={reservation.id}
              carModel={reservation.cars.title}
              carModelEn={reservation.cars.brand}
              bookingDate={reservation.returnDate}
              bookingTime={reservation.returnTime}
              carImage={reservation.cars.image}
              status={'completed'}
              onViewDetails={() => handleViewDetails(reservation.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
