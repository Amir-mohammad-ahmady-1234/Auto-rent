import { CheckmarkIcon } from 'react-hot-toast';

interface ReservationCardProps {
  carModel: string;
  carModelEn: string;
  bookingDate: string;
  carImage: string;
  status: 'completed' | 'current' | 'cancelled';
  onViewDetails: () => void;
}

export function ReservationCard({
  carModel,
  carModelEn,
  bookingDate,
  carImage,
  status,
  onViewDetails,
}: ReservationCardProps) {
  const getStatusText = () => {
    switch (status) {
      case 'completed':
        return 'انجام شده';
      case 'current':
        return 'جاری';
      case 'cancelled':
        return 'لغو شده';
      default:
        return '';
    }
  };

  const getStatusStyles = () => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-50';
      case 'current':
        return 'text-blue-600 bg-blue-50';
      case 'cancelled':
        return 'text-red-600 bg-red-50';
      default:
        return '';
    }
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6">
      <div className="flex items-center justify-between gap-4">
        {/* View Details Button */}
        <div className="flex-shrink-0">
          <button
            onClick={onViewDetails}
            className="rounded-lg border border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50"
          >
            مشاهده جزئیات
          </button>
        </div>

        {/* Car Details */}
        <div className="flex-1 text-center">
          <h3 className="mb-1 text-lg font-semibold text-gray-900">
            {carModel}
          </h3>
          <p className="mb-2 text-sm text-gray-500">({carModelEn})</p>
          <p className="text-sm text-gray-600">{bookingDate}</p>
        </div>

        {/* Car Image */}
        <div className="flex-shrink-0">
          <div className="h-16 w-24 overflow-hidden rounded-lg bg-gray-100">
            <img
              src={carImage || '/placeholder.svg'}
              alt={carModel}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Status */}
        <div className="flex-shrink-0">
          <div
            className={`flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${getStatusStyles()}`}
          >
            {status === 'completed' && <CheckmarkIcon className="h-4 w-4" />}
            <span>{getStatusText()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
