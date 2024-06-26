'use client'
import React from "react"
import CartEmpty from '@/components/CartEmpty'
import Link from 'next/link'


const Courses =()=>{
    return (
        <div>
            <div className="flex justify-center items-center">
                <CartEmpty></CartEmpty>
            </div>
            <div className="flex justify-center grid grid-cols-1 items-center">
                <span className="text-base md:text-4xl font-bold text-center m-auto text-[#4F4A45] font-bold">
                Hey, we are working on the latest Courses!
                </span>
                <p className="flex justify-center text-[#4F4A45] font-semibold text-sm md:text-xl">
                we&apos;ll catch you on this later.
                </p>
                <div className="mt-5 justify-center flex">
                <Link
                    href="/products"
                    className="bg-primary py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200 hover:bg-[#1b2528] hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100"
                >
                    View Products
                </Link>
                </div>
            </div>
        </div>
    )
}
export default Courses
