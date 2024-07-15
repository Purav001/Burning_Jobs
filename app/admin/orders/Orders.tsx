'use client'
import { Order } from '@/lib/models/OrderModel'
import Link from 'next/link'
import useSWR from 'swr'

export default function Orders() {
  const { data: orders, error } = useSWR(`/api/admin/orders`)
  if (error) return 'An error has occurred.'
  if (!orders) return 'Loading...'

  return (
    <div className='text-black'>
      <h1 className="py-4 text-2xl font-bold">Orders</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr style={{color:'black', fontSize:'14px'}}>
              <th>ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>{/* Table Formatting */}</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order: Order) => (
              <tr key={order._id}>
                <td>..{order._id.substring(20, 24)}</td>
                <td>{order.user?.name || 'Deleted user'}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>₹{order.totalPrice}</td>
                <td>
                  {order.isPaid && order.paidAt
                    ? `${order.paidAt.substring(0, 10)}`
                    : 'not paid'}
                </td>
                <td>{/* Table Formatting */}</td>
                <td>
                  <Link 
                  className="bg-[#4F4A45] text-[#F6F1EE] hover:bg-[#F6F1EE] hover:text-[#4F4A45] px-2 py-2 rounded text-xs md:text-base"
                  href={`/order/${order._id}`} passHref>
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
