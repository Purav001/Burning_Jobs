import { Metadata } from 'next'
import Form from './Form'

export const metadata: Metadata = {
  title: `Place Order - Nani's Bilona Ghee`,
  description: `on this page all the details of order, address of delivery and mode of payment is provided.`,
}

export default async function PlaceOrderPage() {
  return <Form />
}
