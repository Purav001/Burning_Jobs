import { Product } from '@/lib/models/ProductModel'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import Rating from './Rating'

export default function ProductItem({ product }: { product: Product }) {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <Image
          src={product.image}
          alt={product.name}
          width={384}
          height={140}
        />
      </figure>
      <div className="card-body">
        <div className="text-sm text-slate-500">
          {' '}
          {/* {type.replaceAll(`_nbsp_`, ` `).replaceAll(`_amp_`, `&`)} */}
        </div>
        <h2 className="card-title">{product.name}</h2>
        <p className="font-medium text-slate-500">{product.brand}</p>
        <Rating rating={product.rating} disabled />
        <div className="card-actions justify-end">
          <button className="btn">
            ${product.price}
            <ShoppingCartIcon className="h-6 w-6" />
          </button>
          <Link href={`/product/${product.slug}`} className="btn btn-info">
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}
