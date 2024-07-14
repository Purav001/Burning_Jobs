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
    router.push('/cart')
}
return existItem ? (
    <div>
    
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
