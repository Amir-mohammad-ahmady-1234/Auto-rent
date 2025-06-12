import { formatNumber } from '../../../utils/formatNumber.1';

type PriceBoxProps = {
  dailyPrice: string;
  monthlyPrice: string;
};

const PriceBox = ({ dailyPrice, monthlyPrice }: PriceBoxProps) => {
  return (
    <div className="overflow-hidden rounded-lg border border-blue-100 bg-blue-50">
      <div className="flex items-center justify-between gap-3 p-4">
        <div className="flex-1">
          <div className="mb-1 text-xs font-medium text-blue-600">ماهانه</div>
          <div className="text-xl font-bold text-blue-700">
            {formatNumber(monthlyPrice)}
            <span className="mr-1 text-sm font-normal text-blue-600">
              تومان
            </span>
          </div>
        </div>
        <div className="flex-1 border-r border-blue-200 pr-3">
          <div className="mb-1 text-xs font-medium text-blue-600">
            از ۱ تا ۳ روز
          </div>
          <div className="text-xl font-bold text-blue-700">
            {formatNumber(dailyPrice)}
            <span className="mr-1 text-sm font-normal text-blue-600">
              تومان
            </span>
          </div>
        </div>
      </div>
      <div className="bg-blue-100 px-4 py-2 text-center text-xs text-blue-700">
        قیمت‌ها شامل مالیات و عوارض می‌شوند
      </div>
    </div>
  );
};

export default PriceBox;
