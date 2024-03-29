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
      <nav style={{ backgroundColor: '#1b2528' }}>
        {' '}
        {/* 1. Set background color of navbar */}
        <div className="navbar justify-between items-center px-6 text-white">
          {' '}
          {/* 2. Set text color to white */}
          <div className="flex items-center">
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
            <Link href="/" className="flex items-center">
              {/* <img
                src="/images/logo-white.png"
                alt="Logo"
                className="h-10 w-auto font-bold mr-4"
              /> */}
              <span
                className="text-lg font-extrabold tracking-tight"
                style={{ color: '#daa407' }}
              >
                Nani's Bilona Ghee
              </span>
            </Link>
          </div>
          <div className="flex flex-grow justify-center items-center hidden md:block mx-auto text-center">
            <a href="#" className="text-white font-bold mr-6">
              Products
            </a>
            <a href="#" className="text-white font-bold mr-6">
              Our Story
            </a>
            <a href="#" className="text-white font-bold mr-6">
              Contact Us
            </a>
            <a href="#" className="text-white font-bold">
              Social Media
            </a>
          </div>
          <Menu />
        </div>
      </nav>
    </header>
  )
}

export default Header
