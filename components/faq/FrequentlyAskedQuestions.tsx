'use client'
import { useState } from 'react'
import Image from 'next/image'
import Accordion from './accordion'
import { Faq } from '@/lib/models/FaqModel'

export default function FrequentlyAskedQuestions({
  AllFaq,
}: {
  AllFaq: Faq[]
}) {
  // const Faq: React.FC = () => {
  return (
    <div className="items-center flex flex-col lg:w-7/12 lg:mt-7 w-full my-5 px-4">
      <span className="text-3xl px-6 py-3 text-white rounded-md bg-gradient-to-r from-blue-700 to-sky-500">
        Frequently Asked Questions
      </span>

      {AllFaq.map((item: Faq, index: number) => {
        return (
          <div className="w-full" key={'questions' + index}>
            <Accordion
              question={item.question}
              answer={item.answer}
              index={index}
            />
          </div>
        )
      })}
    </div>
  )
}
