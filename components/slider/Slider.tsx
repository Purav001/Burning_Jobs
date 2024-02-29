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
    <div>
      <h1 className="text-4xl font-bold text-center text-primary">
        Nani's Bilona Ghee Gallery
      </h1>
      <div
        data-te-lightbox-init
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2"
      >
        {photos.map((image, key) => (
          <div className="flex flex-col" key={key}>
            <img
              src={image.image}
              data-te-img={image.image}
              alt="Table Full of Spices"
              className="mb-1 w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
