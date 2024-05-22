// pages/ghee-making.tsx

import { methodsData } from './methodsData'
import React from 'react'

export const metadata = {
  title: `Ghee Making - Nani's Bilona Ghee`,
  description: `Unlock the #GutHealth & #CleanEating benefits of pure ghee! Discover Nani's Bilona's time-tested #BilonaMethod for making A2 cow & buffalo ghee. #ShopNow for authentic taste & quality!`,
}

export default function GheeMakingPage() {
  return (
    <div className="container my-10 mx-auto md:px-6">
      <section className="mb-16">
        <h2 className="mb-16 text-center md:text-4xl font-bold text-[#854e23] text-sm">
          Complete Ghee Making Process using Ayurvedic Bilona Method
        </h2>

        {methodsData.map((method, index) => (
          <div
            key={index}
            className={`mb-16 flex flex-wrap items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className="border-4 border-[#DAA407] rounded-lg p-6 shadow-lg w-full flex flex-col lg:flex-row">
              <div className="mb-6 w-full mt-4 lg:w-6/12 lg:mb-0">
                <div className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20">
                  <video
                    className="w-full lg:w-full h-auto max-w-full"
                    autoPlay
                    loop
                    muted
                  >
                    <source src={method.methodSrcPath} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              <div className="w-full mt-3 lg:w-6/12 lg:pl-6">
                <h3 className="mb-4 text-sm md:text-2xl font-bold text-[#1b2528]">
                  {method.methodHeading}
                </h3>
                <ul className="list-disc ml-5">
                  {method.methodContent.map((content, contentIndex) => (
                    <li
                      key={contentIndex}
                      className="mb-4 text-[#854e23] font-[500] text-xs md:text-base"
                    >
                      {content}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>
      <div>
        <iframe
          className="mx-auto w-full lg:max-w-4xl lg:max-h-4xl h-100 rounded-lg sm:h-96 shadow-xl"
          src="https://www.youtube.com/embed/B8L9GFHb-vw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
