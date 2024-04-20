'use client'
import CheckoutSteps from '@/components/CheckoutSteps'
import useCartService from '@/lib/hooks/useCartStore'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const Form = () => {
  const router = useRouter()
  const { savePaymentMethod, paymentMethod, shippingAddress } = useCartService()
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('')
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    savePaymentMethod(selectedPaymentMethod)
    router.push('/place-order')
  }

  useEffect(() => {
    if (!shippingAddress.address) {
      return router.push('/shipping')
    }
    setSelectedPaymentMethod(paymentMethod || 'PayPal')
  }, [paymentMethod, router, shippingAddress.address])

  return (
    <div className="grid  justify-items-center m-auto w-full">
      <div className="w-full">
        <CheckoutSteps current={2} />
      </div>
      <div className="m-auto mx-auto card bg-[#fffbe8] mt-10 mb-10">
        <div className="card-body">
          <h1 className="card-title m-auto">Payment Method</h1>
          <form onSubmit={handleSubmit}>
            {['Pay Online', 'Cash on Delivery'].map((payment) => (
              <div key={payment} className="m-auto w-80">
                <label className="label cursor-pointer">
                  <div>
                    <span className="label-text font-bold">{payment}</span>
                    {payment == 'Cash on Delivery' && (
                      <p className="text-gray text-sm">₹150 Advance Payment</p>
                    )}
                  </div>

                  <input
                    type="radio"
                    name="paymentMethod"
                    className="radio"
                    value={payment}
                    checked={selectedPaymentMethod === payment}
                    onChange={() => setSelectedPaymentMethod(payment)}
                  />
                </label>
              </div>
            ))}
            <div className="my-2">
              <button type="submit" className="btn btn-primary w-full">
                Next
              </button>
            </div>
            <div className="my-2">
              <button
                type="button"
                className="btn w-full my-2"
                onClick={() => router.back()}
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Form
