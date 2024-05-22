import { Metadata } from 'next'
import Form from './Form'

export const metadata: Metadata = {
  title: `Register - Nani's Bilona Ghee`,
  description: `Join Nani's Bilona Ghee Family: Unlock a World of Pure Ghee & Personalized Perks!`,
}

export default async function Register() {
  return <Form />
}
