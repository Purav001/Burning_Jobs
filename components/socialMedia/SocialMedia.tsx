import React from 'react'
import ImageCard from './ImageCard'

interface Props {
  // Add any custom props you need here
}

const SocialMedia: React.FC<Props> = ({}) => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 lg:px-20">
      <div className="text-center">
        <h2 className="font-semibold dark:text-white lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800 md:w-full w-9/12 mx-auto">
          Follow Us on Instagram
        </h2>
        <p className="font-normal text-base leading-6 dark:text-gray-400 text-gray-600 mt-4 lg:w-5/12 md:w-9/12 mx-auto">
          Follow us on Instagram @{process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE} and
          tag us to get featured on our timeline.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-6 gap-4 mt-10">
        {/* Add your image components here */}
        <ImageCard
          src="https://i.ibb.co/QHS8Ngp/pexels-alana-sousa-3294250-1.png"
          alt="A picture of a sitting dog"
        />
        <ImageCard
          src="https://i.ibb.co/T8jgRy3/pexels-leah-kelley-1449667-1.png"
          alt="Smiling Girl"
        />
        <ImageCard
          src="https://i.ibb.co/F3dzNWD/pexels-spencer-selover-775358-1.png"
          alt="Men Posing"
        />
        <ImageCard
          src="https://i.ibb.co/DwcwgDP/pexels-chevanon-photography-1108099-1.png"
          alt="2 puppies"
        />
      </div>
    </div>
  )
}

export default SocialMedia
