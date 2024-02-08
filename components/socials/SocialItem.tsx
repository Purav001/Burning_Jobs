import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Social } from '@/lib/models/SocialModel'

export default function SocialItem({ social }: { social: Social }) {
  return (
    <div className="card bg-base-300 shadow-xl mb-4">
      <figure>
        <Link href={`/social/${social.slug}`}>
          <Image
            src={social.image}
            alt={social.name}
            width={300}
            height={300}
            className="object-cover h-64 w-full"
          />
        </Link>
      </figure>
      <h2>{social.name}</h2>
    </div>
  )
}
