import { Link } from 'react-router-dom';

interface HaveAccountProps {
  phone: string;
}

const HaveAccount = ({ phone }: HaveAccountProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-10">
      <div className="space-y-3 text-center">
        <h1 className="text-2xl font-bold text-gray-800">
          شما قبلا ثبت‌نام کرده‌اید
        </h1>
        <p className="text-gray-600">
          شماره موبایل ثبت شده: <span className="font-medium">{phone}</span>
        </p>
      </div>

      <Link
        to="/"
        className="rounded-xl bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition duration-200 hover:bg-blue-700"
      >
        بازگشت به خانه
      </Link>
    </div>
  );
};

export default HaveAccount;
