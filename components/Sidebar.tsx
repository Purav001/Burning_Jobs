'use client'

import useLayoutService from '@/lib/hooks/useLayout'
import Link from 'next/link'
import useSWR from 'swr'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const { toggleDrawer, closeDrower } = useLayoutService()
  const pathname = usePathname()

  return (
    <ul className="menu p-4 w-80 bg-white min-h-full bg-base-200 text-base-content pt-16">
      <li>
        {/* <h2 className="text-xl text-[#1b2528] font-bold underline">
          Nani&apos;s Bilona Ghee
        </h2> */}
      </li>
      <li>
        <a
          onClick={closeDrower}
          href="#About"
          className={`${
            pathname == '/products' ? 'text-[#fbbf24]' : 'text-[#1b2528]'
          } font-bold mr-6`}
        >
          About Us
        </a>
      </li>
      <li>
        <a
          onClick={closeDrower}
          href="#Services"
          className={`${
            pathname == '/our-story' ? 'text-[#fbbf24]' : 'text-[#1b2528]'
          } font-bold mr-6`}
        >
          Services
        </a>
      </li>
      <li>
        <a
          onClick={closeDrower}
          href="/products"
          className={`${
            pathname == '/products' ? 'text-[#fbbf24]' : 'text-[#1b2528]'
          } font-bold mr-6`}
        >
          Courses
        </a>
      </li>
      <li>
        <a
          onClick={closeDrower}
          href="/contact-us"
          className={`${
            pathname == '/contact-us' ? 'text-[#fbbf24]' : 'text-[#1b2528]'
          } font-bold mr-6`}
        >
          Contact Us
        </a>
      </li>
      
    </ul>
  )
}

export default Sidebar
