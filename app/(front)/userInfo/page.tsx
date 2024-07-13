import { Metadata } from 'next'
import Form from './Form'

export const metadata: Metadata = {
  title: `User Info - Burning Jobs`,
  description: `Securely Enter Your Information for Burning Jobs Services.`,
}

export default async function ShippingPage() {
  return <Form />
}
