'use client'

import { Order } from '@/lib/models/OrderModel'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Lottie from 'react-lottie'
import useSWR from 'swr'
import animationData from '@/components/loading.json'

export default function MyOrders() {
  const router = useRouter()
  const { data: orders, error } = useSWR(`/api/orders/mine`)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <></>

  if (error) return 'An error has occurred.'
  if (!orders)
    return (
      <div className="h-full flex justify-center items-center w-full">
        <Lottie options={defaultOptions} height={200} width={200} />
      </div>
    )

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th className="text-gray-600 text-xs md:text-base">ID</th>
            <th className="text-gray-600 text-xs md:text-base">DATE</th>
            <th className="text-gray-600 text-xs md:text-base">TOTAL</th>
            <th className="text-gray-600 text-xs md:text-base">PAID</th>
            <th className="text-gray-600 text-xs md:text-base">DELIVERED</th>
            <th className="text-gray-600 text-xs md:text-base">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order: Order) => (
            <tr key={order._id}>
              <td className="font-semibold text-[#4F4A45] text-xs md:text-base">
                {order._id.substring(20, 24)}
              </td>
              <td className="font-semibold text-[#4F4A45] text-xs md:text-base">
                {order.createdAt.substring(0, 10)}
              </td>
              <td className="font-semibold text-[#4F4A45] text-xs md:text-base">
                ₹{order.totalPrice}
              </td>
              <td className="font-semibold text-[#4F4A45] text-xs md:text-base">
                {order.isPaid ? `Paid ${order.paymentMethod}` : 'not paid'}
              </td>
              <td className="font-semibold text-[#4F4A45] text-xs md:text-base">
                {order.isDelivered
                  ? `${order.shippingAddress.address}`
                  : 'not delivered'}
              </td>
              <td>
                <Link
                  href={`/order/${order._id}`}
                  passHref
                  className="bg-[#4F4A45] text-[#F6F1EE] hover:bg-[#F6F1EE] hover:text-[#4F4A45] px-2 py-2 rounded text-xs md:text-base"
                >
                  Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
