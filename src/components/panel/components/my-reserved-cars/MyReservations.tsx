import { ReservationCard } from './ReservationCard';
import { ReservationStatusCard } from './ReservationStatusCard';

export default function MyReservations() {
  const handleViewDetails = (reservationId?: string) => {
    console.log('View details clicked', reservationId);
  };

  const reservations = [
    {
      id: '1',
      carModel: 'بنز جی-کلاس',
      carModelEn: 'Mercedes Benz G Class',
      bookingDate: 'تاریخ تحویل: ۱۱ بهمن ۱۴۰۳ ساعت ۱۸',
      carImage: '/placeholder.svg?height=64&width=96',
      status: 'completed' as const,
    },
    {
      id: '2',
      carModel: 'بنز جی-کلاس',
      carModelEn: 'Mercedes Benz G Class',
      bookingDate: 'تاریخ تحویل: ۱۱ بهمن ۱۴۰۳ ساعت ۱۸',
      carImage: '/placeholder.svg?height=64&width=96',
      status: 'completed' as const,
    },
    {
      id: '3',
      carModel: 'بنز جی-کلاس',
      carModelEn: 'Mercedes Benz G Class',
      bookingDate: 'تاریخ تحویل: ۱۱ بهمن ۱۴۰۳ ساعت ۱۸',
      carImage: '/placeholder.svg?height=64&width=96',
      status: 'completed' as const,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6" dir="rtl">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-2xl font-bold text-gray-900">رزروهای من</h1>
        </div>

        {/* Status Cards */}
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <ReservationStatusCard
            title="لغو شده"
            count={1}
            variant="cancelled"
          />
          <ReservationStatusCard
            title="انجام شده"
            count={3}
            variant="completed"
          />
          <ReservationStatusCard title="جاری" count={1} variant="current" />
        </div>

        {/* Reservations List */}
        <div className="space-y-4">
          {reservations.map((reservation) => (
            <ReservationCard
              key={reservation.id}
              carModel={reservation.carModel}
              carModelEn={reservation.carModelEn}
              bookingDate={reservation.bookingDate}
              carImage={reservation.carImage}
              status={reservation.status}
              onViewDetails={() => handleViewDetails(reservation.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
