import { Metadata } from 'next'
import Form from './Form'

export const metadata: Metadata = {
  title: `Sign in - Nani's Bilona Ghee`,
  description: `Welcome Back! Sign In to Your Nani's Bilona Ghee Account.`,
}

export default async function Signin() {
  return <Form />
}
