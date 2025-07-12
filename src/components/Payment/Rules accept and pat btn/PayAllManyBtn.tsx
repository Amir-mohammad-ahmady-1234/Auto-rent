import { useReservedInfo } from '../../../context/carReservedData/useReserved';
import { useStep } from '../../../context/handleReserveSteps/useStep';
import { useDepositPrice } from '../../../context/price deposit/useDepositPrice';
import { useUserRserveInfo } from '../../../context/userReservedData/useUserReservedInfo';
import { formatNumber } from '../../../utils/formatNumber.1';
import toast from 'react-hot-toast';
import { useAuth } from '../../../context/Auth/useAuth';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getUserId } from '../../../services/apiAuth';
import FullPageLoading from '../../../ui/FullPageLoading';
import { insertReservation } from '../../../services/apiReservePosts';

const PayAllManyBtn = ({ isRulsAccept }: { isRulsAccept: boolean }) => {
  const { totalAmount } = useDepositPrice();
  const { setCurrentStep } = useStep();

  const { userReservedInfo } = useUserRserveInfo();
  const { formInfo, mainCar } = useReservedInfo();
  const { phone } = useAuth();

  const queryClient = useQueryClient();

  const { data: mainUser_id, isLoading } = useQuery<string | null, Error>({
    queryKey: ['users'],
    queryFn: () => getUserId(phone),
  });

  const { data, mutateAsync, error, status } = useMutation({
    mutationFn: insertReservation,
    onSuccess: () => {
      // Invalidate queries to refetch data after successful mutation
      queryClient.invalidateQueries({ queryKey: ['reservations'] });
      console.log('Item created successfully!');
    },
    onError: (error) => {
      console.error('Error creating item:', error);
    },
  });

  if (error) throw new Error(error.message);

  if (
    isLoading ||
    !userReservedInfo ||
    !formInfo ||
    !mainCar ||
    status === 'pending'
  )
    return <FullPageLoading />;

  const {
    deliveryTime,
    pickupLocation,
    rentalDays,
    rentalType,
    returnLocation,
    returnTime,
    deliveryDate,
    returnDate,
  } = formInfo;

  const {
    adress,
    email,
    lastName,
    name,
    nationalCode,
    phone: userPhone,
  } = userReservedInfo;

  const { id: mainCar_id } = mainCar;

  const newReservation = {
    deliveryDate: deliveryDate.format(),
    deliveryTime,
    rentalType,
    userPhone: userPhone?.toString() || '',
    pickupLocation,
    rentalDays,
    returnDate: returnDate.format(),
    returnLocation,
    returnTime,
    adress,
    email,
    lastName,
    name,
    nationalCode: nationalCode?.toString() || '',
    totalAmount,
    mainCar_id,
    mainUser_id: parseInt(mainUser_id as string),
  };

  async function handlePay() {
    const req = await mutateAsync(newReservation);
    toast.success('پرداخت شما با موفقیت انجام شد.', {
      duration: 3000,
    });
    console.log(req);
    console.log(data);
    setCurrentStep(5);
  }


  // console.log(totalAmount, userReservedInfo, formInfo, mainCar?.id, userID);

  return (
    <>
      {/* Gray payment summary box */}
      <div
        dir="rtl"
        className="mx-auto mt-2 flex w-full max-w-5xl flex-col items-center justify-between rounded-xl bg-[#E5E5E5] p-6 sm:flex-row"
      >
        <div
          dir="rtl"
          className="flex flex-col sm:flex-row sm:items-center sm:space-x-2"
        >
          <span className="mb-2 text-xl font-bold text-[#353535] sm:mb-0">
            مبلغ قابل پرداخت:
          </span>
          <span className="text-2xl font-bold text-[#353535]">
            {formatNumber(totalAmount)} تومان
          </span>
        </div>

        <button
          onClick={handlePay}
          disabled={!isRulsAccept}
          className={`mt-4 cursor-pointer rounded-lg px-12 py-2 text-white transition duration-200 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:outline-none sm:mt-0 ${
            isRulsAccept
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'cursor-not-allowed bg-gray-400'
          }`}
        >
          پرداخت
        </button>
      </div>
    </>
  );
};

export default PayAllManyBtn;
