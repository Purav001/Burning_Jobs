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
        
        {/* 1. Set background color of navbar */}
        <div className="navbar justify-between items-center lg:px-6 md:px-6 text-white padding-global  fixed" style={{ backgroundColor: '#1b2528', zIndex:'100'}}> {/*  */}
        
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
            <img
                src="/images/logo-white.png"
                alt="Logo"
                className="h-10 w-auto font-bold mr-4"
                style={{height:'3rem'}}
            />
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
                to={`${
                    pathname === '/' ?  'About' : '/about'
                }`}
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
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
// import React from 'react'

// const Header = () =>{
//     return(
//         <div className="navbar bg-base-100 fixed">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor">
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h8m-8 6h16" />
//         </svg>
//       </div>
//       <ul
//         tabIndex={0}
//         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//         <li><a>Item 1</a></li>
//         <li>
//           <a>Parent</a>
//           <ul className="p-2">
//             <li><a>Submenu 1</a></li>
//             <li><a>Submenu 2</a></li>
//           </ul>
//         </li>
//         <li><a>Item 3</a></li>
//       </ul>
//     </div>
//     <a className="btn btn-ghost text-xl">daisyUI</a>
//   </div>
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal px-1">
//       <li><a>Item 1</a></li>
//       <li>
//         <details>
//           <summary>Parent</summary>
//           <ul className="p-2">
//             <li><a>Submenu 1</a></li>
//             <li><a>Submenu 2</a></li>
//           </ul>
//         </details>
//       </li>
//       <li><a>Item 3</a></li>
//     </ul>
//   </div>
//   <div className="navbar-end">
//     <a className="btn">Button</a>
//   </div>
// </div>
//     )
// }
// export default Header