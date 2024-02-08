'use client'
import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'

const Header = () => {
  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-base-300">
          <div>
            <label
              htmlFor="my-drawer"
              className="btn btn-square btn-ghost md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <Link href="/" className="btn btn-ghost text-lg">
              Nani&apos;s Bilona Ghee
            </Link>
            <div className="flex space-x-4 hidden md:block">
              <ScrollLink
                to="product-section"
                smooth={true}
                duration={500}
                className="cursor-pointer btn btn-ghost"
              >
                Products
              </ScrollLink>

              <a href="#" className="text-white">
                Our Story
              </a>
              <a href="#" className="text-white">
                Contact Us
              </a>
              <ScrollLink
                to="social-media-section"
                smooth={true}
                duration={500}
                className="cursor-pointer btn btn-ghost"
              >
                Social Media
              </ScrollLink>
            </div>
          </div>

          <Menu />
        </div>
      </nav>
    </header>
  )
}

export default Header
