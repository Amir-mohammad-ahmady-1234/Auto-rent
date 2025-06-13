import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import type { MainCarType } from '../../types/MainCarType';

const HeroSlider = ({ carInfo }: MainCarType) => {
  const { images, title } = carInfo;
  const thumbsSwiperRef = useRef<SwiperType | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialSlideIndex, setInitialSlideIndex] = useState(0);

  const openModal = (index: number) => {
    setInitialSlideIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  const onModalBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-5xl py-8">
      <div
        className={isModalOpen ? 'pointer-events-none blur-sm select-none' : ''}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay, Thumbs]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          thumbs={{ swiper: thumbsSwiperRef.current }}
          onSwiper={(swiper: SwiperType) => {
            if (swiper.thumbs) swiper.thumbs.swiper = thumbsSwiperRef.current!;
          }}
          className="overflow-hidden rounded-xl shadow-lg"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-64 w-full md:h-96">
                <img
                  src={img}
                  alt={`${title} - ${index + 1}`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <h2 className="text-2xl font-bold text-white md:text-4xl">
                    {/* {title} */}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          onSwiper={(swiper: SwiperType) => (thumbsSwiperRef.current = swiper)}
          modules={[Thumbs]}
          slidesPerView={4}
          spaceBetween={10}
          watchSlidesProgress
          className="mt-4"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="cursor-pointer" onClick={() => openModal(index)}>
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="h-20 w-full rounded-lg border border-gray-300 object-cover transition hover:scale-105 hover:border-black"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal with blur effect */}
      {isModalOpen && (
        <div
          onClick={onModalBackdropClick}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 pt-16 backdrop-blur-md"
        >
          <div className="relative h-[80vh] w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-2xl">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-[101] flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-3xl text-white transition-all hover:scale-110 hover:bg-black"
              aria-label="Close modal"
            >
              ×
            </button>

            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              initialSlide={initialSlideIndex}
              className="h-full w-full"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`Fullscreen ${index + 1}`}
                    className="h-full w-full object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSlider;
