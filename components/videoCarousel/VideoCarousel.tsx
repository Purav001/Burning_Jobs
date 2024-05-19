'use client'
import { Photo } from '@/lib/models/PhotoModel'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

export default function VideoCarousel({}: {}) {
  useEffect(() => {
    const init = async () => {
      const { Carousel, Lightbox, initTE } = await import('tw-elements')
      initTE({ Carousel, Lightbox })
    }
    init()
  }, [])

  return (
    <div
      id="carouselExampleCaptions"
      className="relative m-auto"
      data-te-carousel-init
      data-te-ride="carousel"
    >
      <div
        className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
        data-te-carousel-indicators
      >
        <button
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide-to="0"
          data-te-carousel-active
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide-to="1"
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 2"
        ></button>
        {/* <button
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide-to="2"
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 3"
        ></button> */}
      </div>

      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-[''] bg-primary">
        <div
          className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-active
          data-te-carousel-item
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="flex flex-col justify-center">
              <h1 className="mb-4 text-sm font-extrabold tracking-tight text-center leading-none text-white md:text-3xl lg:text-4xl">
                Ghee making using Ayurvedic bilona method
              </h1>
              <p className="mb-8 text-xs font-semibold text-[#1b2528] md:text-xl text-center">
                Discover the magic of Nani&apos;s Bilona Method—crafting pure
                Ghee with love, tradition, and authenticity. A timeless
                celebration in every spoonful.
              </p>
              <div className="grid grid-cols-2">
                <a
                  href="/products"
                  className="inline-flex justify-center items-center py-3 px-5 mx-5 text-xs md:text-base font-medium text-center text-white rounded-lg bg-[#1b2528] hover:text-[#fbbf24] focus:ring-4 focus:ring-blue-300"
                >
                  Shop Now
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
                <Link
                  href="/ghee-making"
                  className="py-3 px-5 sm:ms-4 text-xs md:text-base infline-flex mx-5 justify-center items-center text-center font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-[#fbbf24] hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100"
                >
                  Learn more about process
                </Link>
              </div>
            </div>
            <div className="mb-5">
              <iframe
                className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"
                src="https://www.youtube.com/embed/B8L9GFHb-vw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="flex flex-col justify-center">
              <h1 className="mb-4 text-sm font-extrabold tracking-tight text-center leading-none text-white md:text-3xl lg:text-4xl">
                A lovely Message from our Customer
              </h1>
              <p className="mb-8 text-xs font-semibold text-[#1b2528] md:text-xl text-center">
                Thank you so much, Mam, for such a beautiful video message. We
                are very happy that we have customers like you who support us in
                our business
              </p>
              <div className="grid grid-cols-2">
                <a
                  href="/products"
                  className="inline-flex justify-center items-center py-3 px-5 mx-5 text-xs md:text-base font-medium text-center text-white rounded-lg bg-[#1b2528] hover:text-[#fbbf24] focus:ring-4 focus:ring-blue-300"
                >
                  Shop Now
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
                <Link
                  href="#customer-review-section"
                  className="py-3 px-5 sm:ms-4 text-xs md:text-base infline-flex mx-5 justify-center items-center text-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-[#fbbf24] hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100"
                >
                  View more customer reviews
                </Link>
              </div>
            </div>
            <div className="mb-5">
              <iframe
                className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"
                src="https://www.youtube.com/embed/jlig6cBYidY"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselExampleCaptions"
        data-te-slide="prev"
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>
      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselExampleCaptions"
        data-te-slide="next"
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
      </button>
    </div>
  )
}
