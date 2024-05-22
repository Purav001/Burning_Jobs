import { Metadata } from 'next'
import Form from './Form'

export const metadata: Metadata = {
  title: `Payment Method - Nani's Bilona Ghee`,
  description: `this the payment method selection page during checkout while buying our organic ghee.`,
}

export default async function PaymentPage() {
  return <Form />
}
