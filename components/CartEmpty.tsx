import React from 'react'
import Lottie from 'react-lottie'
import animationData from './lottie.json' // Replace './lottie.json' with the path to your lottie animation JSON file

const CartEmpty = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div className="w-20 h-20 md:w-96 md:h-96">
      <Lottie options={defaultOptions} height="100%" width="100%" />
    </div>
  )
}

export default CartEmpty
