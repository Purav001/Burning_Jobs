'use client'
import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import { usePathname } from 'next/navigation'
import './header.css'
const Header = () => {
const pathname = usePathname()

console.log(pathname)
const scrollToTop = () => {
    scroll.scrollToTop()
}

return (
    <header>
    <nav >{/*  */}
        {' '}
        {/* 1. Set background color of navbar */}
        <div className="navbar justify-between items-center lg:px-6 md:px-6 text-white padding-global  " style={{ backgroundColor: '#1b2528', zIndex: '99'}}>
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
                className="inline-block w-4 h-4                                                                                                                    stroke-current"
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
                className="text-xs lg:text-lg md:text-lg font-extrabold tracking-tight"
                style={{ color: '#ffdc54' }}
            >
                Burning Jobs
            </span>
            </Link>
        </div>
        <div className="flex flex-grow justify-center items-center hidden md:block mx-auto text-center">
            
            <ScrollLink
                to='About'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className={`${
                    pathname === '/About' ? 'text-[#ffdc54]' : 'text-white'
                } font-bold mr-6 cur`}
            >
                About Us
            </ScrollLink>
            <ScrollLink
                to="Services"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className={`${
                    pathname === '/Services' ? 'text-[#ffdc54]' : 'text-white'
                } font-bold mr-6 cur`}
            >
                Services
            </ScrollLink>
            <a
                href="/courses"
                className={`${
                    pathname == '/courses' ? 'text-[#ffdc54]' : 'text-white'
                } font-bold mr-6`}
            >
                Courses
            </a>
            
            <ScrollLink
                to="Testimonials"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className={`${
                    pathname === '/#Testimonials' ? 'text-[#ffdc54]' : 'text-white'
                } font-bold mr-6 cur`}
            >
                Testimonials
            </ScrollLink>
            
            <Link
                href='/contact-us'
                className={`${
                    pathname == '/contact-us' ? 'text-[#ffdc54]' : 'text-white'
                } font-bold mr-6`}
            >
                Contact Us
            </Link>
        </div>
        <Menu />
        </div>
    </nav>
    </header>
)
}

export default Header
