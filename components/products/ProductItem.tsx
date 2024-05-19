import { Product } from '@/lib/models/ProductModel'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import Rating from './Rating'

export default function ProductItem({ product }: { product: Product }) {
  return (
    <div className="card card-compact w-40 md:w-96 bg-base-100 shadow-xl bg-white mb-10">
      <figure>
        <Image src={product.image} alt={product.name} width={350} height={80} />
      </figure>
      <div className="card-body bg-white">
        <h2 className="card-title text-[#1b2528] text-xs md:text-base">
          {product.name}
        </h2>
        <p className="font-bold text-[#1c4854] text-xs md:text-base">
          {product.brand}
        </p>
        <Rating rating={product.rating} disabled />
        <div className="card-actions justify-end flex items-center">
          <div className="font-bold text-[#1c4854] text-xs md:text-base">
            ₹{product.price}
          </div>
          <Link
            href={`/product/${product.slug}`}
            className="btn bg-[#1b2528] text-white hover:bg-[#fbbf24] hover:text-black  text-xs md:text-base"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}
