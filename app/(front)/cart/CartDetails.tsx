'use client'

import ProductItem from '@/components/products/ProductItem'
import useCartService from '@/lib/hooks/useCartStore'
import { Product } from '@/lib/models/ProductModel'
import productService from '@/lib/services/productService'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import CartEmpty from '@/components/CartEmpty'

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
        <div>
          <CartEmpty></CartEmpty>
          <div className="flex justify-center grid grid-cols-1 items-center">
            <span className="text-4xl font-bold text-center m-auto">
              Hey, it feels so light!
            </span>
            <p className="flex justify-center">
              there is nothing in your cart. Let's add some items
            </p>
            <div className="mt-5 justify-center flex">
              <Link
                href="/products"
                class="bg-primary py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200 hover:bg-[#1b2528] hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-10">
          <h1 className="py-4 text-2xl font-extrabold">Shopping Cart</h1>

          <div className="grid md:grid-cols-4 md:gap-5 items-center">
            <div className="overflow-x-auto md:col-span-3">
              <table className="table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Units</th>
                    <th>Price</th>
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
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={100}
                            height={100}
                          ></Image>
                          <span
                            className="px-2 font-bold"
                            style={{ color: '#1b2528' }}
                          >
                            {item.name}
                          </span>
                        </Link>
                      </td>
                      <td>
                        <button
                          className="btn bg-primary"
                          type="button"
                          onClick={() => decrease(item)}
                        >
                          -
                        </button>
                        <span className="px-2 font-bold">{item.qty}</span>
                        <button
                          className="btn bg-primary"
                          type="button"
                          onClick={() => increase(item)}
                        >
                          +
                        </button>
                      </td>
                      <td className="font-bold">₹{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <div className="card px-5" style={{ backgroundColor: '#1b2528' }}>
                <div className="card-body">
                  <ul>
                    <li>
                      <div className="pb-3 text-xl text-white">
                        Subtotal : ₹{itemsPrice}
                      </div>
                    </li>
                    <li>
                      <button
                        onClick={() => router.push('/shipping')}
                        className="btn btn-primary w-full bg-white hover:text-white"
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
