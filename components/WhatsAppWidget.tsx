'use client'
import { useState } from 'react'

const WhatsAppWidget: React.FC = () => {
  const handleToggle = () => {
    const whatsappLink = 'https://wa.me/9041441616'
    window.open(whatsappLink, '_blank')
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <img
        src="images/yellow.png"
        width={60}
        height={60}
        alt="WhatsApp Widget"
        className="cursor-pointer hover:shake-on-hover shake-on-hover"
        onClick={handleToggle}
      />
    </div>
  )
}

export default WhatsAppWidget
