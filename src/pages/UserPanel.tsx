import React, { useState } from 'react';
import {
  FaUserCircle,
  FaWallet,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaDollarSign,
  FaCommentAlt,
  FaSignOutAlt,
  FaArrowLeft,
  FaEdit,
  FaCreditCard,
} from 'react-icons/fa';

interface CardInfo {
  id: number;
  title: string;
  balance: number;
  cardType: 'visa' | 'mastercard' | 'logo';
}

const cards: CardInfo[] = [
  { id: 1, title: 'اولدور بهارور', balance: 100000, cardType: 'visa' },
  { id: 2, title: 'موجودی کیف پول', balance: 110000, cardType: 'logo' },
  { id: 3, title: 'اولدور بهارور', balance: 50000, cardType: 'mastercard' },
];

const quickAmounts = [100000, 200000, 300000];

const UserPanel: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');

  const handleQuickSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(val);
    setSelectedAmount(null);
  };

  const handleIncrease = () => {
    const amount = selectedAmount ?? Number(customAmount);
    if (!amount) return;
    // call API to increase credit
    console.log('افزایش اعتبار به مقدار:', amount);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="flex w-64 flex-col justify-between bg-white p-6 shadow">
        <div>
          {/* User Info */}
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center">
              <FaUserCircle className="text-4xl text-gray-400" />
              <div className="mr-3">
                <p className="font-semibold">اولدور بهارور</p>
                <p className="text-sm text-gray-500">0912 345 6789</p>
              </div>
            </div>
            <button className="text-gray-500 hover:text-gray-700">
              <FaEdit />
            </button>
          </div>

          {/* Navigation */}
          <nav className="space-y-4">
            <NavItem icon={<FaWallet />} label="کیف پول" active />
            <NavItem icon={<FaCalendarAlt />} label="رزروهای من" />
            <NavItem icon={<FaMapMarkerAlt />} label="آدرس‌های من" />
            <NavItem icon={<FaDollarSign />} label="پرداخت‌های من" />
            <NavItem icon={<FaCommentAlt />} label="نظرات من" />
            <NavItem icon={<FaSignOutAlt />} label="خروج" />
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h2 className="mb-6 text-xl font-semibold">کیف پول</h2>
        <div className="mb-8 flex gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative h-40 w-64 overflow-hidden rounded-xl shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
              <div className="relative z-10 flex h-full flex-col justify-between p-4 text-white">
                <p className="text-sm">{card.title}</p>
                <p className="text-lg font-bold">
                  {card.balance.toLocaleString()} تومان
                </p>
                <div className="flex items-center justify-between">
                  <FaWallet />
                  <span className="text-xs">
                    * {String(card.id).padStart(4, '0')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-4 flex items-center gap-4">
          {quickAmounts.map((amount) => (
            <button
              key={amount}
              onClick={() => handleQuickSelect(amount)}
              className={`rounded border px-4 py-2 text-sm ${selectedAmount === amount ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'} hover:bg-blue-100`}
            >
              {amount.toLocaleString()} تومان
            </button>
          ))}
          <input
            type="text"
            placeholder="مبلغ موردنظر خود را وارد کنید..."
            value={customAmount}
            onChange={handleCustomChange}
            className="flex-1 rounded border px-4 py-2 text-sm text-gray-700 focus:outline-none"
          />
        </div>
        <button
          onClick={handleIncrease}
          className="w-full rounded bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          افزایش اعتبار
        </button>
      </main>
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active = false }) => (
  <div
    className={`flex cursor-pointer items-center text-sm ${active ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-500`}
  >
    {icon}
    <span className="mr-3">{label}</span>
  </div>
);

export default UserPanel;
