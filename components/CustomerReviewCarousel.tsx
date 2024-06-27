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
import QuoteIcon from './QuoteIcon'

// import required modules
import { Pagination, Navigation } from 'swiper/modules'

interface CarouselItem {
  name: string
  company: string
  description: string
  imageUrl: string
  imageSizes: {
    size: number;
    url: string; 
  }[];
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
      <section id="Testimonials" className="section_testimonials">
        <div className="padding-global">
          <div className="container-large">
            <div className="testimonials_heading-wrapper">
              <h2>What Our Members Said</h2>
              <div className="find-banner-text text-weight-normal">Our Results Speak For Us</div>
            </div>
          </div>
          <div className="center slick-initialized slick-slider slick-dotted">
            <div className="slick-list draggable" style={{ padding: '0px 80px' }}>
              <div className="slick-track" style={{ opacity: 1, width: '5868px', transform: 'translate3d(-978px, 0px, 0px)' }}>

      {items.map((testimonial, index) => (
        <SwiperSlide key={index}>
              <div key={index} className="swiper-slide slick-slide slick-cloned" tabIndex={-1} role="tabpanel" style={{ width: '309px' }}>
                    <div>
                      <div className="quote w-embed">
                        <QuoteIcon />
                      </div>
                      <p className="testimonials_para">{testimonial.description}</p>
                    </div>
                    <div className="testimonials_image-wrapper">
                      <img
                        src={testimonial.imageUrl}
                        srcSet={testimonial.imageSizes.map((size: { url: any; size: any }) => `${size.url} ${size.size}w`).join(', ')}
                        loading="lazy"
                        width="100"
                        sizes="(max-width: 479px) 100vw, 100px"
                        alt=""
                      />
                      <div className="testimonials_name-wrapper">
                        <div className="testimonials_name">{testimonial.name}</div>
                        <div>{`Placed in ${testimonial.company} | 100% Hike`}</div>
                      </div>
                    </div>
              </div>
        </SwiperSlide>
      ))}
              </div>
            </div>
          </div>
        </div>        
      </section>
    </Swiper>
  )
}

export default CustomerReviewCarousel
