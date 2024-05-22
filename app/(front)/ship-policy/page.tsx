import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Shipping Policy - Nani's Bilona Ghee`,
  description: `Nani's Bilona Ghee Shipping Policy: Fast Delivery & Easy Tracking (Get Your Ghee Faster!)`,
}

export default async function ShippingPolicy() {
  return (
    <div className="container my-10 mx-auto md:px-6">
      <h2 className="mb-16 text-center text-base md:text-4xl font-bold text-[#1b2528]">
        Shipping policy
      </h2>
      <p className="text-center text-sm md:text-2xl font-semibold text-[#1b2528]">
        Nani&apos;s Bilona Ghee collaborates with multiple courier partners for
        shipping across India. We only have standard shipping available at the
        moment. Depending on the location, it takes 2-9 days to be delivered. We
        accept orders only from India. Nani&apos;s Bilona Ghee reserves the
        right to cancel an order within 48 hours from the time of order.
      </p>
    </div>
  )
}
