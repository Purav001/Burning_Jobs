
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from '@/components/Providers'
import DrawerButton from '@/components/DrawerButton'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/header/Header1'
import Link from 'next/link'
import { useEffect } from 'react';
import smoothScroll from './smoothScroll'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Burning Jobs`,

  description: `Unleash the Power of Pure Ghee: Nani's Bilona Offers A2 Cow & Buffalo Ghee Nationwide`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="drawer bg-white">
            <DrawerButton />
            <div className="drawer-content">
              <div className="min-h-screen w-full flex flex-col">
                <Header />
                <main className="flex-grow p-2 pt-4">{children}</main>

                <footer className="bg-[#1b2528]">
                  <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                      <div>
                        <div className="mb-6 md:mb-0">
                          <a href="/" className="flex items-center">
                            <span className="self-center text-base md:text-2xl font-semibold whitespace-nowrap text-[#fbbf24]">
                              Burning Jobs <br/><br/>
                            </span>
                          </a>
                        </div>
                        <div className="mb-5 md:mb-0">
                          <h1 className="text-white font-semibold text-sm md:text-base">
                            Office address:{' '}
                          </h1>
                          <h2 className="text-gray-300 text-xs md:text-base">
                          Exemplar Global Resource Pvt Ltd,<br/>Hollywood Plaza, SCO-6, 1st Floor,<br/>VIP Road, Zirakpur-140603 (Mohali/Chandigarh)
                          </h2>
                          <h2 className="text-gray-300 text-xs md:text-base">
                            Tel: 01762-428437
                          </h2>
                          <h2 className="text-gray-300 text-xs md:text-base">
                          Email- burningjobs@exemplar.co.in
                          </h2>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-4">
                        <div>
                          <h2 className="mb-2 md:mb-6 text-xs md:text-sm font-semibold text-[#fbbf24] uppercase">
                            Services
                          </h2>
                          <ul className="text-white font-medium">
                            <li className="mb-1  md:mb-4">
                              <a
                                href="/products"
                                className="hover:underline text-xs md:text-sm"
                              >
                                Our Products
                              </a>
                            </li>
                            <li className="mb-1 md:mb-4">
                              <a
                                href="/our-story"
                                className="hover:underline text-xs md:text-sm"
                              >
                                Our Story
                              </a>
                            </li>
                            <li>
                              <a
                                href="/contact-us"
                                className="hover:underline text-xs md:text-sm"
                              >
                                Contact Us
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h2 className="mb-2 md:mb-6 text-xs  md:text-sm font-semibold text-[#fbbf24] uppercase">
                            Follow us
                          </h2>
                          <ul className="text-white font-medium">
                            <li className="mb-1 md:mb-4">
                              <a
                                href="https://www.instagram.com/burningjobs/"
                                className="hover:underline text-xs md:text-sm"
                              >
                                Instagram
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.facebook.com/"
                                className="hover:underline text-xs md:text-sm"
                              >
                                Facebook
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h2 className="mb-2 md:mb-6 text-xs md:text-sm font-semibold text-[#fbbf24] uppercase">
                            Legal
                          </h2>
                          <ul className="text-white  font-medium">
                            <li className="mb-1 md:mb-4">
                              <a
                                href="/privacy-policy"
                                className="hover:underline text-xs md:text-sm"
                              >
                                Privacy Policy
                              </a>
                            </li>
                            <li className="mb-1 md:mb-4">
                              <a
                                href="/terms-of-service"
                                className="hover:underline text-xs md:text-sm"
                              >
                                Terms of Service
                              </a>
                            </li>
                            <li className="mb-1 md:mb-4">
                              <a
                                href="/ship-policy"
                                className="hover:underline text-xs md:text-sm"
                              >
                                Shipping Policy
                              </a>
                            </li>
                            <li>
                              <a
                                href="/refund-policy"
                                className="hover:underline text-xs md:text-sm"
                              >
                                Refund Policy
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h2 className="mb-2 md:mb-6 text-sm font-semibold text-[#fbbf24] uppercase">
                            Need Help ?
                          </h2>
                          <ul className="text-white font-medium">
                            <li className="md-2 md:mb-4">
                              <Link
                                href="/contact-us"
                                className=" py-1 px-1 md:py-2 md:px-3 sm:ms-0 text-xs md:text-sm font-small text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-[#fbbf24] focus:z-10 focus:ring-4 focus:ring-gray-100 "
                              >
                                Contact Us
                              </Link>
                            </li>
                            <li>
                              <a
                                href="https://wa.me/9041441616"
                                className="hover:underline text-xs md:text-sm"
                              >
                                WhatsApp
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2024{' '}
                        <a href="" className="hover:underline">
                          Nani&apos;s Bilona Ghee
                        </a>
                        . All Rights Reserved.
                      </span>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
            <div className="drawer-side z-10">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <Sidebar />
            </div>
          </div>
        </Providers>
        
      </body>
    </html>
  )
}
