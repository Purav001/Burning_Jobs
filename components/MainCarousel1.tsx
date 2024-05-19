'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'

const MainCarousel1: React.FC = () => {
  return (
    <a href="/products">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="relative"
      >
        <SwiperSlide>
          <div className="w-full overflow-hidden">
            <img
              src="checking/checking2.png"
              className="w-full"
              alt="Full Width Image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full overflow-hidden">
            <img
              src="checking/checking3.png"
              className="w-full"
              alt="Full Width Image"
            />
          </div>
        </SwiperSlide>
        <div className="swiper-button-next absolute top-1/2 transform -translate-y-1/2 right-2 rounded-full p-2 text-lg hover:bg-opacity-75 transition sm:right-4 sm:p-3 sm:text-xl"></div>
        <div className="swiper-button-prev absolute top-1/2 transform -translate-y-1/2 left-2 rounded-full p-2 text-lg hover:bg-opacity-75 transition sm:left-4 sm:p-3 sm:text-xl"></div>
      </Swiper>
      <style jsx>{`
        .swiper-button-next::after,
        .swiper-button-prev::after {
          color: #daa407;
        }
      `}</style>
    </a>
  )
}

export default MainCarousel1
