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

export default function OrderDetails({
  orderId,
  paypalClientId,
  data,
}: {
  orderId: string
  paypalClientId: string
}) {
  const router = useRouter()
  const [loading1, setLoading1] = React.useState(true)
  const [loading, setLoading] = React.useState(false)
  const idRef = React.useRef()

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
  } = data

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
        ? toast.success('Order delivered successfully')
        : toast.error(data.message)
    }
  )

  const createOrderId = async () => {
    try {
      const response = await fetch('/api/orders/12345/create-razorpay-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: PayOnlineAmount * 100,
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
  const processPayment = async (e: React.FormEvent<HTMLFormElement>) => {
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
            '/api/orders/12345/capture-razorpay-order',
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

  const { data: session } = useSession()
  console.log(session)
  function createPayPalOrder() {
    return fetch(`/api/orders/${orderId}/create-paypal-order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((order) => order.id)
  }

  function onApprovePayPalOrder(data: any) {
    return fetch(`/api/orders/${orderId}/capture-paypal-order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((orderData) => {
        toast.success('Order paid successfully')
      })
  }

  if (loading1)
    return (
      <div className="container h-screen flex justify-center items-center">
        Loading
      </div>
    )

  return (
    <div>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />

      <div className="grid md:grid-cols-4 md:gap-5 my-4 mx-10">
        <div className="md:col-span-3 bg-[#1b2528]">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-[#fbbf24]">Shipping Address</h2>
              <p className="text-white">{shippingAddress.fullName}</p>
              <p className="text-white">
                {shippingAddress.address}, {shippingAddress.city},{' '}
                {shippingAddress.postalCode}, {shippingAddress.country}{' '}
              </p>
              {!isDelivered && isPaid && (
                <p className="text-[#fbbf24]">
                  Your order will be Delivered within 4 to 6 days
                </p>
              )}
              {isDelivered ? (
                <div className="text-success">Delivered at {deliveredAt}</div>
              ) : (
                <div className="text-error">Not Delivered</div>
              )}
            </div>
          </div>

          <div className="card mt-4">
            <div className="card-body">
              <h2 className="card-title text-[#fbbf24]">Payment Method</h2>
              <p className="text-white">{paymentMethod}</p>
              {!isPaid && paymentMethod == 'Cash on Delivery' && (
                <div className="text-white text-sm text-grey-300">
                  Pay ₹150 Advance
                </div>
              )}

              {isPaid && paymentMethod == 'Cash on Delivery' && (
                <div className="text-white text-sm text-grey-300">
                  ₹150 Advanced Payment done
                </div>
              )}

              {isPaid ? (
                <div className="text-success">Paid at {paidAt}</div>
              ) : (
                <>
                  <div className="text-error">Not Paid</div>
                  <button
                    className="btn w-80 my-2 bg-[#fbbf24] hover:bg-[#fbbf24] hover:text-white"
                    onClick={processPayment}
                  >
                    Pay Now
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="card mt-4">
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
                          <span className="px-2 text-white">
                            {item.name} ({item.color} {item.size})
                          </span>
                        </Link>
                      </td>
                      <td className="text-white">{item.qty}</td>
                      <td className="text-white">₹{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div>
          <div className="card bg-white border">
            <div className="card-body">
              <h2 className="card-title">Order Summary</h2>
              <ul>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Items</div>
                    <div>₹{itemsPrice}</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Tax</div>
                    <div>₹{taxPrice}</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Shipping</div>
                    <div>₹{shippingPrice}</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Total</div>
                    <div>₹{totalPrice}</div>
                  </div>
                </li>

                {!isPaid && paymentMethod === 'PayPal' && (
                  <li>
                    <PayPalScriptProvider
                      options={{ clientId: paypalClientId }}
                    >
                      <PayPalButtons
                        createOrder={createPayPalOrder}
                        onApprove={onApprovePayPalOrder}
                      />
                    </PayPalScriptProvider>
                  </li>
                )}
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
                      className="btn w-full my-2"
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
