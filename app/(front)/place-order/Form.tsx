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
        toast.success('Pay to place your order')
        return router.push(`/order/${data.order._id}`)
      } else {
        toast.error(data.message + 'checking')
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

      <div className="grid md:grid-cols-4 md:gap-5 my-4 md:mx-10">
        <div className="overflow-x-auto md:col-span-3 bg-[#F6F1EE] rounded">
          <div className="card pt-2 md:pl-5 md:pr-5">
            <div className="card-body">
              <h2 className="card-title font-bold text-[#4F4A45] text-sm md:text-base">
                Shipping Address
              </h2>
              <p className=" font-semibold text-[#4F4A45] text-xs md:text-base">
                {shippingAddress.fullName}
              </p>
              <p className="font-semibold text-[#4F4A45] text-xs md:text-base">
                {shippingAddress.address}, {shippingAddress.city},{' '}
                {shippingAddress.postalCode}, {shippingAddress.country} ,
                {shippingAddress.contactNumber}
              </p>
              <div>
                <Link
                  className="btn bg-[#4F4A45] text-[#F6F1EE] hover:bg-[#F6F1EE] hover:text-[#4F4A45] text-xs md:text-base"
                  href="/shipping"
                >
                  Edit
                </Link>
              </div>
            </div>
          </div>

          <div className="card  md:pt-2 md:pl-5 md:pr-5">
            <div className="card-body">
              <h2 className="card-title font-bold text-[#4F4A45] text-xs md:text-base">
                Payment Method
              </h2>
              <p className="font-semibold text-[#4F4A45] text-xs md:text-base">
                {paymentMethod}
              </p>
              {/* <p className="text-sm text-gray-600">Pay ₹150 advance</p> */}
              {paymentMethod == 'Cash on Delivery' && (
                <div className="text-sm text-[#4F4A45] text-xs md:text-base">
                  Pay ₹150 Advance
                </div>
              )}
              <div>
                <Link
                  className="btn bg-[#4F4A45] text-[#F6F1EE] hover:bg-[#F6F1EE] hover:text-[#4F4A45] text-xs md:text-base"
                  href="/payment"
                >
                  Edit
                </Link>
              </div>
            </div>
          </div>

          <div className="card md:pt-2 md:pl-5 md:pr-5">
            <div className="card-body">
              <h2 className="card-title font-bold text-[#4F4A45] text-xs md:text-base">
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
                          <span className="px-2 font-semibold text-[#4F4A45]">
                            {item.name}({item.color} {item.size})
                          </span>
                        </Link>
                      </td>
                      <td>
                        <span className="font-semibold text-[#4F4A45]">
                          {item.qty}
                        </span>
                      </td>
                      <td className="font-semibold text-[#4F4A45]">
                        ₹{item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="grid grid-cols-1 md:hidden">
                {items.map((item, index) => (
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

              <div>
                <Link
                  className="btn bg-[#4F4A45] text-[#F6F1EE] hover:bg-[#F6F1EE] hover:text-[#4F4A45] text-xs md:text-base"
                  href="/cart"
                >
                  Edit
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="card bg-white border mt-4 md:mt-0">
            <div className="card-body">
              <h2 className="card-title text-[#4F4A45] font-bold text-sm md:text-base">
                Order Summary
              </h2>
              <ul className="space-y-3">
                <li>
                  <div className=" flex justify-between">
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
                  <div className=" flex justify-between">
                    <div className="font-semibold text-[#4F4A45] text-xs md:text-base">
                      Tax(18% GST)
                    </div>
                    <div className="font-semibold text-[#4F4A45] text-xs md:text-base">
                      ₹{taxPrice}
                    </div>
                  </div>
                </li> */}
                <li>
                  <div className=" flex justify-between">
                    <div className="font-semibold text-[#4F4A45] text-xs md:text-base">
                      Shipping
                      <span className="ml-1 italic text-gray-500 text-xs md:text-base">
                        Delivery charges - free
                      </span>
                    </div>

                    <div className="font-semibold text-[#4F4A45] text-xs md:text-base">
                      ₹{shippingPrice}
                    </div>
                  </div>
                </li>
                <li>
                  <div className=" flex justify-between">
                    <div className="font-semibold text-[#4F4A45] text-xs md:text-base">
                      Total
                    </div>
                    <div className="font-semibold text-[#4F4A45] text-xs md:text-base">
                      ₹{totalPrice}
                    </div>
                  </div>
                </li>

                <li>
                  <button
                    onClick={() => placeOrder()}
                    disabled={isPlacing}
                    className="btn bg-[#4F4A45] text-[#F6F1EE] hover:bg-[#F6F1EE] hover:text-[#4F4A45] w-full text-xs md:text-base"
                  >
                    {isPlacing && (
                      <span className="loading loading-spinner"></span>
                    )}
                    Proceed to Payment
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
