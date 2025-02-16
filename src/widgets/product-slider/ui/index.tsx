import { Card } from "@/features/card/ui"
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ArrowIcon } from "@/shared/icons";

export const ProductSlider = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);

  return (
    <div className="mt-5">
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            480: {
              slidesPerView: 3,
            },
            580: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
            },
            1000: {
              slidesPerView: 6,
            },
            1180: {
              slidesPerView: 7,
            },
            1380: {
              slidesPerView: 8,
            },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {[...Array(13)].map((_, index) => (
            <SwiperSlide key={index}>
              <Card
                image={"https://img-opt.unicorngo.ru/?url=https://cdn.poizon.com/pro-img/origin-img/20240718/a81d0fe174f94efd981745f41deb7e26.jpg&w=640&q=75"}
                name={"Vans Knu Skool"}
                price={"13 742"}
                day={"21 день"}
                day_count={"9 дней"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button onClick={() => swiperRef.current?.slidePrev()} className="absolute top-16 -left-4 z-10 rounded-full hidden md:flex items-center justify-center cursor-pointer bg-white shadow-md w-10 h-10">
          <span className="rotate-180"><ArrowIcon/></span>
        </button>
        <button onClick={() => swiperRef.current?.slideNext()} className="absolute top-16 -right-4 z-10 rounded-full hidden md:flex items-center justify-center cursor-pointer bg-white shadow-md w-10 h-10">
          <span><ArrowIcon/></span>
        </button>
      </div>
    </div>
  )
}
