'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import Image from 'next/image'
import Rating from './products/Rating'

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
      spaceBetween={50}
      // slidesPerView={3}
      navigation
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
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white shadow-lg rounded-lg p-4 card card-compact">
            <div className="card-body">
              <p className="text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
                vitae, libero incidunt alias obcaecati, facere eum, quia at
                voluptas qui ipsa quibusdam id voluptates repellat nemo
                accusamus laborum et enim.
              </p>
              <div className="grid grid-cols-2 mt-5">
                <div className="flex justify-end mr-5">
                  <img
                    src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                    class="w-20 rounded-full"
                    alt="Avatar"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold mt-2">Hemant Sharma</h3>
                  <Rating rating={5} disabled />
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
