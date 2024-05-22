import { Metadata } from 'next'
import Form from './Form'

export const metadata: Metadata = {
  title: 'Profile',
  description: 'Profile page to update information of user',
}

export default async function Profile() {
  return <Form />
}
