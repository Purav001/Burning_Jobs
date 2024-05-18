'use client'
import * as React from 'react'

import { useRouter, useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { Button } from 'react-scroll'

export default function Checkout() {
  const router = useRouter()
  const params = useSearchParams()
  const amount = params.get('amount')
  const [loading1, setLoading1] = React.useState(true)
  const [loading, setLoading] = React.useState(false)
  const idRef = React.useRef()

  React.useEffect(() => {
    if (!amount) {
      router.replace('/')
    }
    createOrderId()
  }, [])

  const createOrderId = async () => {
    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: parseFloat(amount!) * 100,
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
        amount: parseFloat(amount!) * 100,
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

          const result = await fetch('/api/verify', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
          })
          const res = await result.json()
          //process further request, whatever should happen after request fails
          if (res.isOk) alert(res.message) //process further request after
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
  if (loading1)
    return (
      <div className="container h-screen flex justify-center items-center">
        Loading
      </div>
    )
  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />

      <section className="container h-screen flex flex-col justify-center items-center gap-10">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
          Checkout
        </h1>
        <div className="max-w-[25rem] space-y-8">
          <div>
            <div className="my-4">Continue</div>
            <div>
              By clicking on pay you&aposll purchase your plan subscription of
              Rs {amount}/month
            </div>
          </div>
          <div>
            <form onSubmit={processPayment}>
              <button className="w-full" type="submit">
                {loading ? '...loading' : 'Pay'}
              </button>
            </form>
          </div>
          <div className="flex">
            <p className="text-sm text-muted-foreground underline underline-offset-4">
              Please read the terms and conditions.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
