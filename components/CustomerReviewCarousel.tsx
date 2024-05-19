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

interface CarouselItem {
  title: string
  description: string
  image: string
}

interface CarouselProps {
  items: CarouselItem[]
}

const CustomerReviewCarousel: React.FC<CarouselProps> = ({ items }) => {
  return (
    <Swiper
      // style={{
      //   // '--swiper-navigation-color': '#1b2528',
      //   '--swiper-pagination-color': '#1b2528',
      // }}
      spaceBetween={50}
      // slidesPerView={3}
      breakpoints={{
        1200: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        // when window width is >= 320px (sm)
        320: {
          slidesPerView: 1,
        },
      }}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white shadow-lg rounded-lg p-4 card card-compact">
            <div className="card-body">
              <p className="text-gray-600 font-semibold text-xs md:text-base">
                {item.description}
              </p>
              <div className="grid grid-cols-2 mt-5">
                <div className="flex justify-end mr-5">
                  <img
                    src={item.image}
                    className="w-10 h-10 md:w-20 md:h-20 rounded-full"
                    alt="Avatar"
                  />
                </div>
                <div>
                  <h3 className="text-xs md:text-lg font-bold mt-2 text-[#1b2528]">
                    {item.title}
                  </h3>
                  {/* <Rating rating={5} disabled /> */}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default CustomerReviewCarousel
