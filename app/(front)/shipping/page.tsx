import { Metadata } from 'next'
import Form from './Form'

export const metadata: Metadata = {
  title: `Shipping Address - Nani's Bilona Ghee`,
  description: `Securely Enter Your Shipping Address for Nani's Bilona Ghee Delivery.`,
}

export default async function ShippingPage() {
  return <Form />
}
