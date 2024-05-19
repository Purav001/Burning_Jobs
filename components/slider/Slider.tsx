'use client'
import { Photo } from '@/lib/models/PhotoModel'
import React, { useState, useEffect } from 'react'

export default function Slider({ photos }: { photos: Photo[] }) {
  useEffect(() => {
    const init = async () => {
      const { Carousel, Lightbox, initTE } = await import('tw-elements')
      initTE({ Carousel, Lightbox })
    }
    init()
  }, [])

  return (
    <div className="bg-[#1b2528] py-10">
      <h1 className="text-2xl md:text-4xl font-bold text-center text-primary">
        Nani&apos;s Bilona Ghee Gallery
      </h1>
      <div
        data-te-lightbox-init
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mx-10 mt-5"
      >
        {photos.map((image, key) => (
          <div className="flex flex-col p-2" key={key}>
            <img
              src={image.image}
              data-te-img={image.image}
              alt="Nani's Love in Golden Jar"
              className="mb-1 w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
