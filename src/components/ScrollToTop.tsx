import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { scrollToTop } from '../utils/ScrollToTop';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed right-8 bottom-8 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="transform rounded-full bg-blue-600 p-3 text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:bg-blue-700"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
