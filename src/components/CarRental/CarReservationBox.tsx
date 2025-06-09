import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";

const CarReservationBox = () => {
  const [rentalType, setRentalType] = useState<string>("اجاره خودرو با راننده");
  const [deliveryDate, setDeliveryDate] = useState<Date | null>(new Date());
  const [returnDate, setReturnDate] = useState<Date | null>(new Date());
  const [deliveryTime, setDeliveryTime] = useState<string | null>("10:00");
  const [returnTime, setReturnTime] = useState<string | null>("07:00");
  const [insurance, setInsurance] = useState<"basic" | "full">("basic");

  const rentalTypes = [
    "اجاره خودرو با راننده",
    "اجاره خودرو بی راننده",
    "اجاره ماشین عروس",
  ];

  return (
    <div className="w-full max-w-[496px] p-6 bg-white rounded-2xl shadow-xl border border-gray-200 space-y-6 text-right font-vazir">

      {/* قیمت‌ها */}
      <div className="flex justify-between items-center gap-3 border border-blue-500 rounded-xl p-4 text-center">
        <div className="flex-1">
          <div className="text-xs text-gray-500 mb-1">ماهانه</div>
          <div className="font-bold text-blue-700 text-lg">۱۲,۵۰۰,۰۰۰</div>
        </div>
        <div className="flex-1 border-r border-gray-300 pr-3">
          <div className="text-xs text-gray-500 mb-1">از ۱ تا ۳ روز</div>
          <div className="font-bold text-blue-700 text-lg">۲,۵۰۰,۰۰۰</div>
        </div>
        {/* <div className="flex-1 border-r border-gray-300 pr-3">
          <div className="text-xs text-gray-500 mb-1">روزانه</div>
          <div className="font-bold text-blue-700 text-lg">؟</div>
        </div> */}
      </div>

      {/* نوع اجاره */}
      <div className="flex flex-wrap gap-2 justify-start">
        {rentalTypes.map((type) => (
          <button
            key={type}
            onClick={() => setRentalType(type)}
            className={`rounded-full px-3 py-2 text-sm border transition-all duration-200
              ${rentalType === type
                ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
              }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* مکان تحویل و بازگشت */}
      {["محل تحویل خودرو", "محل بازگشت خودرو"].map((label, idx) => (
        <select
          key={idx}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>{label}</option>
          <option>تهران - فرودگاه امام</option>
          <option>تهران - دفتر مرکزی</option>
        </select>
      ))}

      {/* تاریخ و ساعت */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">تاریخ تحویل</label>
          <DatePicker
            selected={deliveryDate}
            onChange={(date) => setDeliveryDate(date)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm"
            dateFormat="yyyy/MM/dd"
            calendarClassName="rtl"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">ساعت تحویل</label>
          <TimePicker
            onChange={(value) => setDeliveryTime(value)}
            value={deliveryTime}
            className="w-full text-sm"
            clockIcon={null}
            disableClock
            format="HH:mm"
            clearIcon={null}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">تاریخ بازگشت</label>
          <DatePicker
            selected={returnDate}
            onChange={(date) => setReturnDate(date)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm"
            dateFormat="yyyy/MM/dd"
            calendarClassName="rtl"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">ساعت بازگشت</label>
          <TimePicker
            onChange={(value) => setReturnTime(value)}
            value={returnTime}
            className="w-full text-sm"
            clockIcon={null}
            disableClock
            format="HH:mm"
            clearIcon={null}
          />
        </div>
      </div>

      {/* بیمه */}
      <div>
        <p className="text-sm font-semibold mb-2">نوع بیمه:</p>
        <div className="flex gap-6 text-sm">
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="insurance"
              value="basic"
              checked={insurance === "basic"}
              onChange={() => setInsurance("basic")}
            />
            بیمه پایه
          </label>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="insurance"
              value="full"
              checked={insurance === "full"}
              onChange={() => setInsurance("full")}
            />
            بیمه کامل
          </label>
        </div>
      </div>

      {/* دکمه ارسال */}
      <button className="w-full py-3 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition">
        ثبت درخواست
      </button>
    </div>
  );
};

export default CarReservationBox;
