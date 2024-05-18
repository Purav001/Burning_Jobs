'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import Image from 'next/image'
import Rating from './products/Rating'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation } from 'swiper/modules'

const MainCarousel1: React.FC = () => {
  return (
    <a href="/products">
      <Swiper
        style={{
          '--swiper-navigation-color': '#1b2528',
          '--swiper-pagination-color': '#1b2528',
        }}
        spaceBetween={50}
        // slidesPerView={3}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
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
      </Swiper>
    </a>
  )
}

export default MainCarousel1
