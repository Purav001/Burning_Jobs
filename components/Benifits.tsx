import Image from 'next/image'
import React from 'react'

interface SmallCardProps {
  imageSrc: string
  heading: string
}

const SmallCard: React.FC<SmallCardProps> = ({ imageSrc, heading }) => {
  return (
    <div className="w-full max-w-sm bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div>
        <img
          src={'/' + imageSrc}
          alt={heading}
          width={40}
          height={40}
          className="w-full h-full object-cover mb-4 square-image group-hover:scale-105 transition-transform rounded-md"
          style={{ padding: '5px' }} // Added padding to the image
        />
      </div>
      <div className="px-5 pb-5">
        <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
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
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-10 m-auto mx-20 pb-20 pt-5">
      {cards.map((card, index) => (
        <SmallCard key={index} {...card} />
      ))}
    </div>
  )
}

export default Card
