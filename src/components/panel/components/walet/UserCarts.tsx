import { FaWallet } from 'react-icons/fa';

interface CardInfo {
  id: number;
  title: string;
  balance: number;
  cardType: 'visa' | 'mastercard' | 'logo';
}

const UserCarts = () => {
  const cards: CardInfo[] = [
    { id: 1, title: 'اولدور بهارور', balance: 100000, cardType: 'visa' },
    { id: 2, title: 'موجودی کیف پول', balance: 110000, cardType: 'logo' },
    { id: 3, title: 'اولدور بهارور', balance: 50000, cardType: 'mastercard' },
  ];

  return (
    <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <div
          key={card.id}
          className="relative h-40 w-full overflow-hidden rounded-xl shadow-lg"
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
  );
};

export default UserCarts;
