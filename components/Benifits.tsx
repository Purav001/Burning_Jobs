import Image from 'next/image'
import React from 'react'

interface SmallCardProps {
  imageSrc: string
  heading: string
}

const SmallCard: React.FC<SmallCardProps> = ({ imageSrc, heading }) => {
  return (
    <div className="bg-purple-50 p-4 rounded-md shadow-md relative overflow-hidden group">
      <div className="bg-white p-4 rounded-md shadow-md relative overflow-hidden group">
        <Image
          src={'/' + imageSrc}
          alt={heading}
          width={40}
          height={40}
          className="w-full h-full object-cover mb-4 square-image group-hover:scale-105 transition-transform rounded-md"
          style={{ padding: '5px' }} // Added padding to the image
        />
      </div>
      <div className="h3-card absolute bottom-0 left-0 right-0 bg-purple-50 p-4 rounded-t-md">
        <h3 className="text-xl font-bold mb-2 text-black">{heading}</h3>
      </div>
    </div>
  )
}

interface CardProps {
  cards: SmallCardProps[]
}

const Card: React.FC<CardProps> = ({ cards }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-10">
      {cards.map((card, index) => (
        <SmallCard key={index} {...card} />
      ))}
    </div>
  )
}

export default Card
