'use client'
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
import { OrderItem } from '@/lib/models/OrderModel'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import toast from 'react-hot-toast'
import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'
import { useRouter } from 'next/navigation'
import React from 'react'
import Script from 'next/script'
import animationData from '@/components/loading.json'
import Lottie from 'react-lottie'

export default function OrderDetails({
  orderId,
  data1,
}: {
  orderId: string
  data1: any
}) {
  const router = useRouter()
  const [loading1, setLoading1] = React.useState(true)
  const [loading, setLoading] = React.useState(false)
  const idRef = React.useRef()
  const { data: session } = useSession()

  console.log(session)

  const {
    paymentMethod,
    shippingAddress,
    items,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    isDelivered,
    deliveredAt,
    isPaid,
    paidAt,
  } = data1

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  const PayOnlineAmount = paymentMethod == 'Cash on Delivery' ? 150 : totalPrice

  React.useEffect(() => {
    console.log(totalPrice + 'checking')
    if (!totalPrice) {
      router.replace('/')
    }
    createOrderId()
  }, [])

  const { trigger: payOrder, isMutating: paying } = useSWRMutation(
    `/api/orders/${orderId}`,
    async (url) => {
      const res = await fetch(`/api/admin/orders/${orderId}/paid`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await res.json()
      res.ok
        ? toast.success('Order Will be dispacted within 24 hours')
        : toast.error(data.message)
    }
  )

  const createOrderId = async () => {
    try {
      console.log(session?.user._id)
      const response = await fetch(`/api/orders/12345/create-razorpay-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: PayOnlineAmount * 100,
          user: session?.user.name,
          email: session?.user.email,
          id: session?.user._id,
        }),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await response.json()
      const id = data.orderId
      idRef.current = id
      setLoading1(false)
      return
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error)
    }
  }
  const processPayment = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    setLoading(true)
    const orderId = idRef.current
    console.log(orderId)
    try {
      const options = {
        key: process.env.key_id,
        amount: PayOnlineAmount * 100,
        currency: 'INR',
        name: 'Payment', //busniess name
        description: 'Payment',
        order_id: orderId,
        handler: async function (response: any) {
          const data = {
            orderCreationId: orderId,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          }

          const result = await fetch(
            `/api/orders/12345/capture-razorpay-order`,
            {
              method: 'POST',
              body: JSON.stringify(data),
              headers: { 'Content-Type': 'application/json' },
            }
          )
          const res = await result.json()
          //process further request, whatever should happen after request fails
          if (res.isOk) {
            alert(res.message)
            payOrder()
          } //process further request after
          else {
            alert(res.message)
          }
        },
        theme: {
          color: '#3399cc',
        },
      }
      const paymentObject = new (window as any).Razorpay(options)
      paymentObject.on('payment.failed', function (response: any) {
        alert(response.error.description)
      })
      setLoading(false)
      paymentObject.open()
    } catch (error) {
      console.error(error)
    }
  }

  const { trigger: deliverOrder, isMutating: isDelivering } = useSWRMutation(
    `/api/orders/${orderId}`,
    async (url) => {
      const res = await fetch(`/api/admin/orders/${orderId}/deliver`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await res.json()
      res.ok
        ? toast.success('Order delivered successfully')
        : toast.error(data.message)
    }
  )

  if (loading1)
    return (
      <div className="h-full flex justify-center items-center w-full">
        <Lottie options={defaultOptions} height={200} width={200} />
      </div>
    )

  return (
    <div>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />

      <div className="grid md:grid-cols-4 md:gap-5 my-4 md:mx-10">
        <div className="overflow-x-auto md:col-span-3 bg-[#F6F1EE] rounded">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title font-bold text-[#4F4A45] text-sm md:text-base">
                Shipping Address
              </h2>
              <p className="font-semibold text-[#4F4A45] text-xs md:text-base">
                {shippingAddress.fullName}
              </p>
              <p className="font-semibold text-[#4F4A45] text-xs md:text-base">
                {shippingAddress.address}, {shippingAddress.city},{' '}
                {shippingAddress.postalCode}, {shippingAddress.country} ,{' '}
                {shippingAddress.contactNumber}
              </p>
              {!isDelivered && isPaid && (
                <p className=" text-[#4F4A45] text-xs md:text-base">
                  Your order will be Delivered within 4 to 6 days
                </p>
              )}
              {isDelivered ? (
                <div className="text-success font-bold text-xs md:text-base">
                  Delivered at {deliveredAt}
                </div>
              ) : (
                <div className="text-error font-bold text-xs md:text-base">
                  Not Delivered
                </div>
              )}

              {!isPaid && (
                <div className="text-xs md:text-base text-[#4F4A45]">
                  Your order will be dispatched within 24 hours once the payment
                  is completed from you side
                </div>
              )}
            </div>
          </div>

          <div className="card md:mt-4">
            <div className="card-body">
              <h2 className="card-title font-bold text-[#4F4A45] text-sm md:text-base">
                Payment Method
              </h2>
              <p className="font-semibold text-[#4F4A45] text-xs md:text-base">
                {paymentMethod}
              </p>
              {!isPaid && paymentMethod == 'Cash on Delivery' && (
                <div className="text-[#4F4A45] text-xs md:text-base">
                  Pay ₹150 Advance
                </div>
              )}

              {isPaid && paymentMethod == 'Cash on Delivery' && (
                <div className="text-xs md:text-base text-[#4F4A45]">
                  ₹150 Advanced Payment done
                </div>
              )}

              {isPaid ? (
                <div className="text-success font-bold text-xs md:text-base">
                  Paid at {paidAt}
                </div>
              ) : (
                <>
                  <div className="text-error font-bold text-xs md:text-base">
                    Not Paid
                  </div>
                  <div className="text-xs md:text-base text-[#4F4A45]">
                    Pay Now to place your order....{' '}
                  </div>
                  <button
                    className="btn bg-[#4F4A45] text-[#F6F1EE] hover:bg-[#F6F1EE] hover:text-[#4F4A45] text-xs md:text-base"
                    onClick={processPayment}
                  >
                    Pay Now
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="card md:mt-4">
            <div className="card-body">
              <h2 className="card-title font-bold text-[#4F4A45] text-sm md:text-base">
                Items
              </h2>
              <table className="table hidden md:block">
                <thead>
                  <tr>
                    <th className="text-gray-600">Item</th>
                    <th className="text-gray-600">Quantity</th>
                    <th className="text-gray-600">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item: OrderItem) => (
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
                          <span className="px-2 font-semibold text-[#4F4A45]">
                            {item.name} ({item.color} {item.size})
                          </span>
                        </Link>
                      </td>
                      <td className="font-semibold text-[#4F4A45]">
                        {item.qty}
                      </td>
                      <td className="font-semibold text-[#4F4A45]">
                        ₹{item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="grid grid-cols-1 md:hidden">
                {items.map((item: OrderItem) => (
                  <div key={item.slug} className="mb-5 border p-2">
                    <div className="grid grid-cols-2 items-center justify-center flex mb-3">
                      <div className="grid grid-cols-2">
                        <div className="flex items-center justify-center">
                          <Link href={`/product/${item.slug}`}>
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={50}
                              height={50}
                            />
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
                        <span className="px-2 font-bold text-black">
                          {item.qty}
                        </span>
                      </div>
                    </div>
                    <p
                      className="px-2 font-semibold text-xs"
                      style={{ color: '#1b2528' }}
                    >
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="card bg-white border mt-4 md:mt-0">
            <div className="card-body">
              <h2 className="card-title font-bold text-[#4F4A45] text-sm md:text-base">
                Order Summary
              </h2>
              <ul>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div className="font-semibold text-[#4F4A45] text-xs md:text-base">
                      Items
                      <span className="italic text-gray-500 text-xs md:text-base ml-1">
                        including of all taxes
                      </span>
                    </div>
                    <div className="font-semibold text-[#4F4A45] text-xs md:text-base">
                      ₹{itemsPrice}
                    </div>
                  </div>
                </li>
                {/* <li>
                  <div className="mb-2 flex justify-between">
                    <div className="font-semibold text-[#4F4A45] text-xs md:text-base">
                      Tax(18% GST)
                    </div>
                    <div className="font-semibold text-[#4F4A45] text-xs md:text-base">
                      ₹{taxPrice}
                    </div>
                  </div>
                </li> */}
                <li>
                  <div className="mb-2 flex justify-between">
                    <div className="font-semibold text-[#4F4A45] text-xs md:text-base">
                      {' '}
                      Shipping{' '}
                      <span className="italic text-gray-500 text-xs md:text-base">
                        Free for 2 Week (till 01 June)
                      </span>
                    </div>
                    <div className="font-semibold text-[#4F4A45] text-xs md:text-base">
                      ₹{shippingPrice}
                    </div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div className="font-semibold text-[#4F4A45] text-xs md:text-base">
                      Total
                    </div>
                    <div className="font-semibold text-[#4F4A45] text-xs md:text-base">
                      ₹{totalPrice}
                    </div>
                  </div>
                </li>

                {session?.user.isAdmin && (
                  <li>
                    <button
                      className="btn w-full my-2"
                      onClick={() => payOrder()}
                      disabled={paying}
                    >
                      {paying && (
                        <span className="loading loading-spinner"></span>
                      )}
                      Mark as Paid
                    </button>
                    <button
                      className="btn w-full my-2 "
                      onClick={() => deliverOrder()}
                      disabled={isDelivering}
                    >
                      {isDelivering && (
                        <span className="loading loading-spinner"></span>
                      )}
                      Mark as delivered
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
