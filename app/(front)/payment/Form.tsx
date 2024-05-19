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
    setSelectedPaymentMethod(paymentMethod || 'Pay Online')
  }, [paymentMethod, router, shippingAddress.address])

  return (
    <div className="grid  justify-items-center m-auto w-full">
      <div className="w-full">
        <CheckoutSteps current={2} />
      </div>
      <div className="m-auto mx-auto card bg-[#F6F1EE] mt-10 mb-10">
        <div className="card-body">
          <h1 className="card-title m-auto text-[#4F4A45] font-bold text-sm md:text-base">
            Payment Method
          </h1>
          <form onSubmit={handleSubmit}>
            {['Pay Online', 'Cash on Delivery'].map((payment) => (
              <div key={payment} className="m-auto w-full">
                <label className="label cursor-pointer">
                  <div>
                    <span className="label-text font-bold text-[#4F4A45] text-xs md:text-base">
                      {payment}
                    </span>
                    {payment == 'Cash on Delivery' && (
                      <p className="text-[#4F4A45] text-sm">
                        ₹150 Advance Payment
                      </p>
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
              <button
                type="submit"
                className="btn bg-[#4F4A45] text-[#F6F1EE] hover:bg-[#F6F1EE] hover:text-[#4F4A45] w-full"
              >
                Next
              </button>
            </div>
            <div className="my-2">
              <button
                type="button"
                className="btn w-full my-2 bg-[#4F4A45] text-[#F6F1EE] hover:bg-[#F6F1EE] hover:text-[#4F4A45]"
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
