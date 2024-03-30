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
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  )
}

export default CartEmpty
