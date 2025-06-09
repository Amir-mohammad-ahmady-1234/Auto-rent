import React from 'react';

interface ServiceTypeSelectorProps {
  selectedService: string;
  onServiceChange: (service: string) => void;
}

export const ServiceTypeSelector: React.FC<ServiceTypeSelectorProps> = ({
  selectedService,
  onServiceChange,
}) => {
  const services = [
    { id: 'wedding', label: 'اجاره ماشین عروس' },
    { id: 'without-driver', label: 'اجاره خودرو بی راننده' },
    { id: 'with-driver', label: 'اجاره خودرو با راننده' },
  ];

  return (
    <div className="flex items-center justify-between gap-2 self-stretch sm:gap-2 md:flex-col md:gap-3">
      {services.map((service) => (
        <button
          key={service.id}
          type="button"
          onClick={() => onServiceChange(service.id)}
          className={`h-10 flex-1 cursor-pointer gap-2 rounded-full border border-gray-300 bg-transparent px-3 text-center text-sm leading-[180%] font-semibold capitalize transition-all duration-200 ${selectedService === service.id ? 'bg-blue-700 text-white' : 'text-black'} hover:border-blue-700`}
        >
          {service.label}
        </button>
      ))}
    </div>
  );
};
