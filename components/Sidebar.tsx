'use client'

import useLayoutService from '@/lib/hooks/useLayout'
import Link from 'next/link'
import useSWR from 'swr'

const Sidebar = () => {
  const { toggleDrawer, closeDrower } = useLayoutService()
  const { data: categories, error } = useSWR('/api/products/categories')

  if (error) return error.message
  if (!categories) return 'Loading...'

  return (
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <li>
        <h2 className="text-xl">Nani&apos;s Bilona Ghee</h2>
      </li>
      <li>
        <h3>Products</h3>
      </li>
      <li>
        <h3>Our Story</h3>
      </li>
      <li>
        <h3>Contact Us</h3>
      </li>
      <li>
        <h3>Blogs</h3>
      </li>
    </ul>
  )
}

export default Sidebar
