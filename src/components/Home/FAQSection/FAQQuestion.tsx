import { useState } from 'react';
import PlusLogo from '../../../assets/+-Logo/add-square.png';
import MinusLogo from '../../../assets/+-Logo/minus-square.png';

interface FAQ {
  id: number;
  title: string;
  content: string;
}

const FAQQuestin = ({ faq: { title, content } }: { faq: FAQ }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-4 flex w-full flex-col items-start justify-start gap-2 overflow-hidden rounded-2xl border border-[#D7D7D7] bg-white p-4">
      <div className="flex w-full items-center justify-start gap-2 text-right text-base font-medium text-[#353535]">
        <img
          src={isOpen ? MinusLogo : PlusLogo}
          alt="Toggle Icon"
          className="my-auto h-6 w-6 flex-shrink-0 cursor-pointer"
          onClick={() => setIsOpen((open) => !open)}
        />
        <div className="flex-1">{title}</div>
      </div>
      <div className="w-full text-right text-sm leading-[25px] font-normal text-[#727272] capitalize">
        {isOpen && content}
      </div>
    </div>
  );
};

export default FAQQuestin;
