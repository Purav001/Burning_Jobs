'use client'
import CheckoutSteps from '@/components/CheckoutSteps'
import useCartService from '@/lib/hooks/useCartStore'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import useSWRMutation from 'swr/mutation'
import Image from 'next/image'

const Form = () => {
  const router = useRouter()
  const {
    paymentMethod,
    shippingAddress,
    items,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    clear,
  } = useCartService()

  const { trigger: placeOrder, isMutating: isPlacing } = useSWRMutation(
    `/api/orders/mine`,
    async (url) => {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentMethod,
          shippingAddress,
          items,
          itemsPrice,
          taxPrice,
          shippingPrice,
          totalPrice,
        }),
      })
      const data = await res.json()
      if (res.ok) {
        clear()
        toast.success('Order placed successfully')
        return router.push(`/order/${data.order._id}`)
      } else {
        toast.error(data.message)
      }
    }
  )
  useEffect(() => {
    if (!paymentMethod) {
      return router.push('/payment')
    }
    if (items.length === 0) {
      return router.push('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paymentMethod, router])

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <></>

  return (
    <div>
      <CheckoutSteps current={4} />

      <div className="grid md:grid-cols-4 md:gap-5 my-4 mx-10">
        <div className="overflow-x-auto md:col-span-3 bg-[#1b2528] rounded">
          <div className="card pt-2 pl-5 pr-5">
            <div className="card-body">
              <h2 className="card-title text-[#fbbf24]">Shipping Address</h2>
              <p className="text-white">{shippingAddress.fullName}</p>
              <p className="text-white">
                {shippingAddress.address}, {shippingAddress.city},{' '}
                {shippingAddress.postalCode}, {shippingAddress.country}{' '}
              </p>
              <div>
                <Link
                  className="btn bg-[#1b2528] text-white hover:bg-[#1b2528] hover:text-[#fbbf24]"
                  href="/shipping"
                >
                  Edit
                </Link>
              </div>
            </div>
          </div>

          <div className="card  pt-2 pl-5 pr-5">
            <div className="card-body">
              <h2 className="card-title text-[#fbbf24]">Payment Method</h2>
              <p className="font-semibold text-white">{paymentMethod}</p>
              <p className="text-sm text-gray-300">Pay ₹150 advance</p>
              <div>
                <Link
                  className="btn bg-[#1b2528] text-white hover:bg-[#1b2528] hover:text-[#fbbf24]"
                  href="/payment"
                >
                  Edit
                </Link>
              </div>
            </div>
          </div>

          <div className="card pt-2 pl-5 pr-5">
            <div className="card-body">
              <h2 className="card-title text-[#fbbf24]">Items</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th className="text-gray-300">Item</th>
                    <th className="text-gray-300">Quantity</th>
                    <th className="text-gray-300">Price</th>
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
                            width={50}
                            height={50}
                          ></Image>
                          <span className="px-2 text-white">
                            {item.name}({item.color} {item.size})
                          </span>
                        </Link>
                      </td>
                      <td>
                        <span className="text-gray-300">{item.qty}</span>
                      </td>
                      <td className="text-gray-300">₹{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div>
                <Link
                  className="btn bg-[#1b2528] text-white hover:bg-[#1b2528] hover:text-[#fbbf24]"
                  href="/cart"
                >
                  Edit
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="card bg-white border">
            <div className="card-body">
              <h2 className="card-title">Order Summary</h2>
              <ul className="space-y-3">
                <li>
                  <div className=" flex justify-between">
                    <div>Items</div>
                    <div>₹{itemsPrice}</div>
                  </div>
                </li>
                <li>
                  <div className=" flex justify-between">
                    <div>Tax</div>
                    <div>₹{taxPrice}</div>
                  </div>
                </li>
                <li>
                  <div className=" flex justify-between">
                    <div>Shipping</div>
                    <div>₹{shippingPrice}</div>
                  </div>
                </li>
                <li>
                  <div className=" flex justify-between">
                    <div>Total</div>
                    <div>₹{totalPrice}</div>
                  </div>
                </li>

                <li>
                  <button
                    onClick={() => placeOrder()}
                    disabled={isPlacing}
                    className="btn btn-primary w-full"
                  >
                    {isPlacing && (
                      <span className="loading loading-spinner"></span>
                    )}
                    Place Order
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Form
