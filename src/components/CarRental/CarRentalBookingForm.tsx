import React, { useState } from 'react';
import { PricingCard } from './PricingCard';
import { FormInput } from './FormInput';
import { RadioButton } from './RadioButton';
import { ServiceTypeSelector } from './ServiceTypeSelector';

interface FormData {
  pickupLocation: string;
  returnLocation: string;
  pickupDate: string;
  pickupTime: string;
  returnDate: string;
  returnTime: string;
  insuranceType: string;
  serviceType: string;
}

export const CarRentalBookingForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    pickupLocation: '',
    returnLocation: '',
    pickupDate: '1403٫02٫10',
    pickupTime: '07:00',
    returnDate: '1403٫02٫۲۸',
    returnTime: '07:00',
    insuranceType: 'basic',
    serviceType: 'with-driver',
  });

  const handleInputChange = (field: keyof FormData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const LocationIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 6.93945C13.8546 6.93952 15.3701 8.44659 15.3701 10.3096C15.3701 12.1708 13.8563 13.6699 12 13.6699C10.1454 13.6699 8.63007 12.1627 8.62988 10.2998C8.62988 8.43847 10.1436 6.93945 12 6.93945ZM12 7.43945C10.4252 7.43945 9.12988 8.72206 9.12988 10.3096C9.12995 11.8957 10.4139 13.1797 12 13.1797C13.586 13.1796 14.8701 11.8956 14.8701 10.3096C14.8701 8.7221 13.5747 7.43952 12 7.43945Z"
        fill="#868686"
        stroke="#868686"
      />
      <path
        d="M12.0005 1.75H12.0103C15.4557 1.75003 19.3357 3.70421 20.5259 8.02539L20.6323 8.4502C21.791 13.5695 18.7049 17.9168 15.7847 20.7285C14.7198 21.7474 13.3544 22.2597 12.0005 22.2598C10.7312 22.2598 9.45179 21.8098 8.41943 20.9141L8.21631 20.7285C5.38749 18.0049 2.40247 13.8313 3.28076 8.91895L3.37744 8.44141V8.44043C4.39086 3.97627 8.1951 1.88234 11.6655 1.75586L12.0005 1.75ZM12.0005 2.25C8.94161 2.25 4.93133 3.88808 3.87256 8.54785C2.72936 13.5335 5.87004 17.7686 8.57373 20.3613V20.3604C10.4973 22.2165 13.5125 22.2156 15.436 20.3594L15.437 20.3604C18.0462 17.8489 21.0736 13.7976 20.2407 9.01562L20.1479 8.5498V8.54785L20.0386 8.12012C18.8282 3.78737 14.9636 2.25011 12.0005 2.25Z"
        fill="#868686"
        stroke="#868686"
      />
    </svg>
  );

  const CalendarIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M8 2V5"
        stroke="#868686"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 2V5"
        stroke="#868686"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 9.08984H20.5"
        stroke="#868686"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
        stroke="#868686"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.6947 13.6992H15.7037"
        stroke="#868686"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.6947 16.6992H15.7037"
        stroke="#868686"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9955 13.6992H12.0045"
        stroke="#868686"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9955 16.6992H12.0045"
        stroke="#868686"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.29431 13.6992H8.30329"
        stroke="#868686"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.29431 16.6992H8.30329"
        stroke="#868686"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const ClockIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
        stroke="#868686"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.7099 15.1798L12.6099 13.3298C12.0699 13.0098 11.6299 12.2398 11.6299 11.6098V7.50977"
        stroke="#868686"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="font-estedad flex w-[496px] max-w-full flex-col items-center justify-center gap-6 rounded-[14px] bg-white p-6 sm:gap-5 sm:p-4 md:w-full md:max-w-[496px] md:p-5"
    >
      {/* Pricing Section */}
      <div className="flex items-start gap-2 self-stretch sm:flex-col sm:gap-3">
        <PricingCard
          period="روزانه"
          price="۲,500,000"
          duration="از ۱ تا ۳ روز:"
        />
        <PricingCard
          period="ماهانه"
          price="۱۲,500,000"
          duration="از ۱ تا30روز:"
        />
      </div>

      {/* Service Type Selection */}
      <ServiceTypeSelector
        selectedService={formData.serviceType}
        onServiceChange={handleInputChange('serviceType')}
      />

      {/* Form Fields */}
      <div className="flex flex-col items-start justify-center gap-6 self-stretch sm:gap-5">
        <FormInput
          type="location"
          placeholder="محل تحویل خودرو"
          value={formData.pickupLocation}
          onChange={handleInputChange('pickupLocation')}
          icon={<LocationIcon />}
        />

        <FormInput
          type="location"
          placeholder="محل بازگشت خودرو"
          value={formData.returnLocation}
          onChange={handleInputChange('returnLocation')}
          icon={<LocationIcon />}
        />

        <FormInput
          type="date"
          label="تاریخ تحویل"
          placeholder="1403٫02٫10"
          value={formData.pickupDate}
          onChange={handleInputChange('pickupDate')}
          icon={<CalendarIcon />}
        />

        <FormInput
          type="time"
          label="ساعت تحویل"
          placeholder="07:00"
          value={formData.pickupTime}
          onChange={handleInputChange('pickupTime')}
          icon={<ClockIcon />}
        />

        <FormInput
          type="date"
          label="تاریخ برگشت"
          placeholder="1403٫02٫۲۸"
          value={formData.returnDate}
          onChange={handleInputChange('returnDate')}
          icon={<CalendarIcon />}
        />

        <FormInput
          type="time"
          label="ساعت برگشت"
          placeholder="07:00"
          value={formData.returnTime}
          onChange={handleInputChange('returnTime')}
          icon={<ClockIcon />}
        />

        {/* Insurance Selection */}
        <div className="flex items-center gap-4 sm:gap-2">
          <span className="text-base font-semibold text-gray-700">
            نوع بیمه:
          </span>
          <RadioButton
            name="insurance"
            value="complete"
            checked={formData.insuranceType === 'complete'}
            onChange={handleInputChange('insuranceType')}
            label="بیمه کامل"
          />
          <RadioButton
            name="insurance"
            value="basic"
            checked={formData.insuranceType === 'basic'}
            onChange={handleInputChange('insuranceType')}
            label="بیمه پایه"
          />
        </div>

        {/* Total Price */}
        <div className="flex w-full items-center justify-between rounded-lg bg-gray-100 p-3">
          <div className="text-lg font-bold text-blue-700">۸,500,000</div>
          <div className="text-sm text-gray-800">۱۸ روز:</div>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full rounded-lg bg-blue-700 py-3 font-bold text-white transition-all hover:bg-blue-800 active:bg-blue-900"
      >
        ثبت درخواست
      </button>
    </form>
  );
};
