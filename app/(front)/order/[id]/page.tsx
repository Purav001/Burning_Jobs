'use client'
import useSWR from 'swr'
import OrderDetails from './OrderDetails'

// export function generateMetadata({ params }: { params: { id: string } }) {
//   return {
//     title: `Order ${params.id}`,
//   }
// }

// export const metadata = {
//   title: `Order Details - Nani's Bilona Ghee`,
//   description: `Your Nani's Bilona Cart: Almost There!`,
// }

export default function OrderDetailsPage({
  params,
}: {
  params: { id: string }
}) {
  const { data, error } = useSWR(`/api/orders/${params.id}`)
  if (error) return error.message
  if (!data) return 'loading...'

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

  console.log(paymentMethod + shippingAddress + items + totalPrice + 'checking')

  return <OrderDetails orderId={params.id} data1={data} />
}
