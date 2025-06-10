// components/ScrollToTopButton.tsx
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // نشون دادن یا مخفی کردن دکمه با توجه به موقعیت اسکرول
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // عملکرد کلیک
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <button
        className="fixed right-8 bottom-8 z-[1000] cursor-pointer rounded-full border-none bg-blue-600 p-4 text-white shadow-md transition-opacity duration-300"
        onClick={handleClick}
        aria-label="Scroll to top"
      >
        <FaArrowUp className="h-6 w-6" />
      </button>
    )
  );
};

export default ScrollToTopButton;
