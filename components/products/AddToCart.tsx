'use client'
import useCartService from '@/lib/hooks/useCartStore'
import { OrderItem } from '@/lib/models/OrderModel'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function AddToCart({ item }: { item: OrderItem }) {
  const router = useRouter()
  const { items, increase, decrease } = useCartService()
  const [existItem, setExistItem] = useState<OrderItem | undefined>()

  useEffect(() => {
    setExistItem(items.find((x) => x.slug === item.slug))
  }, [item, items])

  const addToCartHandler = () => {
    increase(item)
  }
  return existItem ? (
    <div>
      <div className="border inline-block whitespace-nowrap min-w-min">
        <button
          className="py-1 px-2 md:px-4 text-sm md:text-base font-medium text-center text-black  hover:bg-[#fbbf24] focus:ring-4 focus:ring-blue-300 m-0"
          type="button"
          onClick={() => decrease(existItem)}
        >
          -
        </button>
        <span className="px-2 font-bold text-[#1b2528] text-sm md:text-base">
          {existItem.qty}
        </span>
        <button
          className="py-1 px-2 md:px-4 text-sm md:text-base font-medium text-center text-black  hover:bg-[#fbbf24] focus:ring-4 focus:ring-blue-300 m-0"
          type="button"
          onClick={() => increase(existItem)}
        >
          +
        </button>
      </div>
      <Link
        className="ml-5 text-xs md:text-sm py-2 px-3 md:py-2 md:px-5 text-base font-medium text-center text-white rounded-lg bg-[#1b2528] hover:bg-[#fbbf24] hover:text-black focus:ring-4 focus:ring-blue-300 text-sm md:text-base"
        href="/cart"
      >
        Go to Cart
      </Link>
    </div>
  ) : (
    <button
      className="btn btn-primary w-full text-black bg-[#fbbf24] hover:bg-[#1b2528] hover:text-white text-sm md:text-base"
      type="button"
      onClick={addToCartHandler}
    >
      Add to cart
    </button>
  )
}
