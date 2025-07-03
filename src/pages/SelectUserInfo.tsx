import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStep } from '../context/handleReserveSteps/useStep';
import StepManagement from '../ui/StepManagement';
import { useUserRserveInfo } from '../context/userReservedData/useUserReservedInfo';
import { useAuth } from '../context/Auth/useAuth';
import RulesModal from '../ui/RulesModal';

const SelectUserInfo = () => {
  const navigate = useNavigate();

  const { currentStep, setCurrentStep } = useStep();
  const { errors, handleSubmit, onSubmit, register } = useUserRserveInfo();
  const { phone } = useAuth();

  const [isRulesOpen, setIsRulesOpen] = useState(false);

  useEffect(
    function () {
      if (currentStep === 1) navigate('/rent');
      if (currentStep === 4) navigate('/rent/payment');
    },
    [currentStep, navigate]
  );

  const handleConfirm = () => {
    setCurrentStep(4);
    setIsRulesOpen(false);
  };

  if (isRulesOpen)
    return <RulesModal isOpen={isRulesOpen} onConfirm={handleConfirm} />;

  return (
    <section className="w-full bg-gray-50 py-8">
      <StepManagement />

      {/* Alert */}
      <div className="mx-auto mt-4 max-w-4xl rounded bg-blue-100 p-3 text-center text-sm text-blue-800">
        برای اعتبارسنجی قبل از تحویل خودرو، مستنداتی از شما درخواست می‌گردد. عدم
        ارائه این مستندات باعث لغو این رزرو خواهد شد.
      </div>

      {/* Form */}
      <div className="mx-auto mt-10 max-w-4xl rounded-lg bg-white p-6 shadow">
        <h2 className="mb-4 text-xl font-semibold">مشخصات کاربر</h2>

        <form
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label className="mb-1 block text-sm">نام</label>
            <input
              {...register('name', { required: true, minLength: 1 })}
              type="text"
              className="w-full rounded border border-gray-300 p-2"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-600">
                {errors.name.type === 'required' &&
                  'لطفا نام خود را وارد کنید.'}
                {errors.name.type === 'minLength' && 'تعداد کاراکتر ناکافی.'}
              </p>
            )}
          </div>
          <div>
            <label className="mb-1 block text-sm">نام خانوادگی</label>
            <input
              {...register('lastName', { required: true, minLength: 1 })}
              type="text"
              className="w-full rounded border border-gray-300 p-2"
            />
            {errors.lastName && (
              <p className="mt-1 text-xs text-red-600">
                {errors.lastName.type === 'required' &&
                  'لطفا نام خوانوادگی خود را وارد کنید.'}
                {errors.lastName.type === 'minLength' &&
                  'تعداد کاراکتر ناکافی.'}
              </p>
            )}
          </div>
          <div>
            <label className="mb-1 block text-sm">کد ملی</label>
            <input
              {...register('nationalCode', { required: true, minLength: 10 })}
              type="number"
              className="w-full rounded border border-gray-300 p-2"
            />
            {errors.nationalCode && (
              <p className="mt-1 text-xs text-red-600">
                {errors.nationalCode.type === 'required' &&
                  'لطفا کدملی خود را وارد کنید.'}
                {errors.nationalCode.type === 'minLength' &&
                  'تعداد کاراکتر ناکافی.'}
              </p>
            )}
          </div>
          <div>
            <label className="mb-1 block text-sm">شماره موبایل</label>
            <input
              {...register('phone', { required: true, minLength: 10 })}
              type="number"
              defaultValue={phone ?? ''}
              className="w-full rounded border border-gray-300 p-2"
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-600">
                {errors.phone.type === 'required' &&
                  'لطفا شماره موبایل خود را وارد کنید.'}
                {errors.phone.type === 'minLength' && 'تعداد کاراکتر ناکافی.'}
              </p>
            )}
          </div>
          <div>
            <label className="mb-1 block text-sm">ایمیل</label>
            <input
              {...register('email', { required: true })}
              type="email"
              className="w-full rounded border border-gray-300 p-2"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">
                {errors.email.type === 'required' &&
                  'لطفا ایمیل خود را وارد کنید.'}
                {errors.email.type === 'minLength' && 'تعداد کاراکتر ناکافی.'}
              </p>
            )}
          </div>
          <div>
            <label className="mb-1 block text-sm">ادرس</label>
            <input
              {...register('adress', { required: true })}
              type="text"
              className="w-full rounded border border-gray-300 p-2"
            />
            {errors.adress && (
              <p className="mt-1 text-xs text-red-600">
                {errors.adress.type === 'required' &&
                  'لطفا ادرس خود را وارد کنید.'}
              </p>
            )}
          </div>
        </form>
      </div>
      {/* Car Image & Button */}
      <div className="flex w-full flex-col items-center justify-center gap-4 px-4 md:flex-row">
        <button
          onClick={() => {
            setIsRulesOpen(true);
            setCurrentStep(3);
          }}
          className="w-full cursor-pointer rounded bg-blue-600 py-4 text-white md:w-1/2"
        >
          ادامه رزرو
        </button>
        <img
          src="/images/caaars 1.png"
          alt="car"
          className="w-full rounded-lg object-cover md:w-1/2"
        />
      </div>
    </section>
  );
};

export default SelectUserInfo;
