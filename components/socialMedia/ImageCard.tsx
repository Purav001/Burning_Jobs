'use client'
import { useState } from 'react'
import { FaInstagram } from 'react-icons/fa'
import Modal from './Modal'
import useModal from './useModal'
import InstagramEmbed from '../InstagramEmbed'

const ImageCard: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const { ref, onOpen, onClose } = useModal()

  return (
    <div>
      <div className="relative group" onClick={onOpen}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover mb-4 rounded-md transition-opacity duration-300 group-hover:opacity-75"
          style={{ padding: '5px' }}
        />
        {/* {hovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
            <FaInstagram className="text-white text-4xl" />
          </div>
        )} */}
      </div>

      <Modal ref={ref} onClose={onClose}>
        <InstagramEmbed></InstagramEmbed>
      </Modal>
    </div>
  )
}

export default ImageCard
