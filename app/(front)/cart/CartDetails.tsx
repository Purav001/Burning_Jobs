'use client'

import useCartService from '@/lib/hooks/useCartStore'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import CartEmpty from '@/components/CartEmpty'
import CheckoutSteps from '@/components/CheckOutSteps'

export default function CartDetails() {
const router = useRouter()
const { items, itemsPrice, decrease, increase } = useCartService()

const [mounted, setMounted] = useState(false)
useEffect(() => {
    setMounted(true)
}, [])

if (!mounted) return <></>

return (
    <>
    {items.length === 0 ? (
        <div style={{paddingTop: '100px', paddingBottom:'40px'}}>
            <div className="w-full">
                <CheckoutSteps current={0} />
            </div>
        <div className="flex justify-center items-center">
            <CartEmpty></CartEmpty>
        </div>
        <div className="flex justify-center grid grid-cols-1 items-center">
            <span className="text-base md:text-4xl font-bold text-center m-auto text-[#4F4A45] font-bold">
            Hey, it feels so light!
            </span>
            <p className="flex justify-center text-[#4F4A45] font-semibold text-sm md:text-xl">
            there is nothing in your cart. Let&apos;s add some items
            </p>
            <div className="mt-5 justify-center flex">
            <Link
                href="/services"
                className="bg-primary py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200 hover:bg-[#1b2528] hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100"
            >
                View Services
            </Link>
            </div>
        </div>
        </div>
    ) : (
        <div className="mx-10" style={{paddingTop: '100px', height: 'auto'}}>
            <div className="w-full">
                <CheckoutSteps current={0} />
            </div>
        <h1 className="py-4 text-2xl font-extrabold text-[#1b2528] font-bold text-center">
            Shopping Cart
        </h1>

        <div className="grid md:grid-cols-4 md:gap-5 items-center justify-center">
            <div className="overflow-x-auto md:col-span-3 hidden md:block">
            <table className="table">
                <thead>
                <tr>
                    <th className="text-gray-600">Item</th>
                    <th className="text-gray-600">Individuals</th>
                    <th className="text-gray-600">Price</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item) => (
                    <tr key={item.slug}>
                    <td>
                        <Link
                        href={`/product/${item.slug}`}
                        className="flex items-center"
                        >
                        
                        <span
                            className="px-2 font-bold sm:text-lg"
                            style={{ color: '#1b2528' }}
                        >
                            {item.title}
                        </span>
                        </Link>
                    </td>
                    <td>
                        <button
                        className="btn bt bg-[#feca3a] text-black  hover:bg-[rgba(254,194,27,1)] "
                        type="button"
                        onClick={() => decrease(item)}
                        >
                        -
                        </button>
                        <span className="px-2 font-bold text-black">
                        {item.qty}
                        </span>
                        <button
                        className="btn bt bg-[#feca3a] text-black  hover:bg-[rgba(254,194,27,1)]"
                        type="button"
                        onClick={() => increase(item)}
                        >
                        +
                        </button>
                    </td>
                    <td className="font-bold text-[#1b2528]">
                        ₹{item.price}
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
            <div className="grid grid-cols-1 md:hidden">
            {items.map((item, index) => (
                <div key={item.slug} className="mb-5 border p-2">
                <div className="grid grid-cols-2 items-center justify-center flex mb-3">
                    <div className="grid grid-cols-2">
                    <div className="flex items-center justify-center">
                        <Link href={`/product/${item.slug}`}>
                        
                        </Link>
                    </div>
                    <div className="flex items-center justify-center">
                        <Link href={`/product/${item.slug}`}>
                        <span
                            className="px-2 font-semibold text-xs"
                            style={{ color: '#1b2528' }}
                        >
                            ₹{item.price}
                        </span>
                        </Link>
                    </div>
                    </div>
                    <div className="flex items-center justify-center">
                    <button
                        className="btn bt bg-[#feca3a] text-black  hover:bg-[rgba(254,194,27,1)] px-2 py-1 text-xs"
                        type="button"
                        onClick={() => decrease(item)}
                    >
                        -
                    </button>

                    <span className="px-2 font-bold text-black">
                        {item.qty}
                    </span>
                    <button
                        className="btn bt bg-[#feca3a] text-black  hover:bg-[rgba(254,194,27,1)] px-2 py-1 text-xs"
                        type="button"
                        onClick={() => increase(item)}
                    >
                        +
                    </button>
                    </div>
                </div>
                <p
                    className="px-2 font-semibold text-xs"
                    style={{ color: '#1b2528' }}
                >
                    {item.title}
                </p>
                </div>
            ))}
            </div>
            <div>
            <div
                className="card p-5 md:px-5 my-5 justify-center"
                style={{ backgroundColor: '#F6F1EE' }}
            >
                <div>
                <ul >
                    <li>
                    <div className="pb-3 text-sm md:text-xl text-[#4F4A45] text-center  ">
                        Subtotal : ₹{itemsPrice}
                    </div>
                    </li>
                    <li>
                    <button
                        onClick={() => router.push('/userInfo')}
                        className="btn bg-[#4F4A45] text-[white] w-full  hover:bg-[transparent] hover:text-[black] text-sm md:text-base"
                    >
                        Proceed to Checkout
                    </button>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        </div>
    )}
    </>
)
}
