'use client'
import Image from 'next/image'

import Skeleton from 'react-loading-skeleton'
import React, { useState } from 'react'

interface SmallCardProps {
  imageSrc: string
  heading: string
}

const SmallCard: React.FC<SmallCardProps> = ({ imageSrc, heading }) => {
  const [isLoading, setIsLoading] = useState(true)

  const handleImageLoad = () => {
    setIsLoading(false) // Set isLoading to false when image is completely loaded
  }

  return (
    <div className="w-40 md:w-full max-w-sm bg-[#efe2d0] border border-gray-200 rounded-lg shadow flex justify-center grid grid-cols-2 md:grid-cols-1 items-center text-center m-auto">
      <Image
        src={'/' + imageSrc}
        data-loaded="false"
        alt="brefit of A2 cow ghee"
        onLoad={(event) => {
          event.currentTarget.setAttribute('data-loaded', 'true')
        }}
        width={200}
        height={200}
        className="data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10 m-auto md:pt-5"
      ></Image>
      <div className="px-5  pb-2 pt-2  md:pb-5  flex justify-center items-center h-full">
        <h3 className="text-xs md:text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
          {heading}
        </h3>
      </div>
    </div>
  )
}

interface CardProps {
  cards: SmallCardProps[]
}

const Card: React.FC<CardProps> = ({ cards }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-10 m-auto lg:mx-20 pb-20 pt-5 items-center md:px-0">
      {cards.map((card, index) => (
        <SmallCard key={index} {...card} />
      ))}
    </div>
  )
}

export default Card
