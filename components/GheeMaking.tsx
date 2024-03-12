'use client'
import { Photo } from '@/lib/models/PhotoModel'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

export default function GheeMaking({}: {}) {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div class="flex flex-col justify-center">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
            Ghee making using Ayurvedic bilona method
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Discover the magic of Nani's Bilona Method—crafting pure Ghee with
            love, tradition, and authenticity. A timeless celebration in every
            spoonful.
          </p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
            <a
              href="#product-section"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Shop Now
              <svg
                class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <Link
              href="/ghee-making"
              class="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Learn more about process
            </Link>
          </div>
        </div>
        <div>
          <iframe
            class="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"
            src="https://www.youtube.com/embed/KaLxCiilHns"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}
