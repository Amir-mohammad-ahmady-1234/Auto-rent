import { CheckmarkIcon } from 'react-hot-toast';
import { convertDateToPersianString } from '../../../../utils/converDateToPersian';
import DetailsOfOrder from '../../../CarRental/DetailsOfOrder';
import { MdClose } from 'react-icons/md';

interface ReservationCardProps {
  carModel: string;
  carModelEn: string;
  bookingDate: string;
  bookingTime: string;
  carImage: string;
  status: 'completed' | 'current' | 'cancelled';
  isDetailsModalOpen: boolean;
  onCloseDetailsModal: () => void;
  pickupLocation: string;
  returnLocation: string;
  rentalType: string;
  deliveryDate: string;
  returnDate: string;
}

export function ReservationCard({
  carModel,
  carModelEn,
  bookingDate,
  bookingTime,
  carImage,
  status,
  isDetailsModalOpen,
  onCloseDetailsModal,
  pickupLocation,
  rentalType,
  returnLocation,
  deliveryDate,
  returnDate,
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

  return (
    <>
      <div className="flex flex-col-reverse items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:flex-row">
        <button
          onClick={onCloseDetailsModal}
          className="flex-shrink-0 rounded-md border border-blue-600 px-3 py-1.5 text-sm font-medium text-blue-600 transition hover:bg-blue-50"
        >
          مشاهده جزئیات
        </button>

        <div className="flex-1 text-center">
          <h3 className="text-base font-semibold text-gray-900">{carModel}</h3>
          <p className="mb-1 text-xs text-gray-500">({carModelEn})</p>
          <p className="text-xs text-gray-600">
            تاریخ تحویل : {convertDateToPersianString(bookingDate)} ساعت :{' '}
            {bookingTime}
          </p>
        </div>

        <div className="h-14 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
          <img
            src={carImage || '/placeholder.svg'}
            alt={carModel}
            className="h-full w-full object-cover"
          />
        </div>

        <div
          className={`flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium ${
            status === 'completed'
              ? 'bg-green-100 text-green-700'
              : status === 'current'
                ? 'bg-blue-100 text-blue-700'
                : 'bg-red-100 text-red-700'
          }`}
        >
          {status === 'completed' && <CheckmarkIcon className="h-4 w-4" />}
          <span>{getStatusText()}</span>
        </div>
      </div>

      {/* ✅ Modal */}
      {isDetailsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="bg-opacity-50 absolute inset-0 backdrop-blur-sm transition"
            onClick={onCloseDetailsModal}
          ></div>

          {/* Modal Content */}
          <div className="relative z-10 max-h-[90vh] w-[90vw] overflow-y-auto rounded-lg bg-white p-6 shadow-lg">
            <button
              onClick={onCloseDetailsModal}
              className="absolute top-3 left-3 rounded-full bg-gray-200 p-1 hover:bg-gray-300"
            >
              <MdClose />
            </button>

            <DetailsOfOrder
              pickupLocation={pickupLocation}
              returnLocation={returnLocation}
              rentalType={rentalType}
              title={carModel}
              deliveryDate={deliveryDate}
              returnDate={returnDate}
            />
          </div>
        </div>
      )}
    </>
  );
}
