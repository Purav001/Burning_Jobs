import { Metadata } from 'next'
import Form from './Form'

export const metadata: Metadata = {
  title: `Place Order - Burning Jobs`,
  description: `This page contains all the details of order, user information and service payment.`,
}

export default async function PlaceOrderPage() {
  return <Form />
}
