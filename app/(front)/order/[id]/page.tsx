'use client'
import useSWR from 'swr'
import OrderDetails from './OrderDetails'



export default function OrderDetailsPage({
params,
}: {
params: { id: string }
}) {
const { data, error } = useSWR(`/api/orders/${params.id}`)
if (error) return error.message
if (!data) return 'loading...'

const {
    shippingAddress,
    items,
    itemsPrice,
    totalPrice,
    isPaid,
    paidAt,
} = data

console.log( shippingAddress + items + totalPrice + 'checking')

return <OrderDetails orderId={params.id} data1={data} />
}
