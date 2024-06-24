import { Metadata } from 'next'
import Form from './Form'

export const metadata: Metadata = {
  title: `Sign in - Burning Jobs`,
  description: `Welcome Back! Sign In to Your Burning Jobs Account.`,
}

export default async function Signin() {
  return <Form />
}
