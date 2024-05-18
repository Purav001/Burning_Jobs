'use client'

import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { sendEmail } from './SendEmail'
import mailSent from '@/components/mailsent.json'
import Lottie from 'react-lottie'

export type FormData = {
  name: string
  email: string
  message: string
  phone_number: string
  time_slot: string
}

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>()
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(data: FormData) {
    sendEmail(data)
    setSubmitted(true)
  }
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: mailSent,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div>
      {submitted ? (
        <div className="h-full flex justify-center items-center w-full">
          <div className="grid grid-cols-1">
            <Lottie options={defaultOptions} height={150} width={150} />
            <div className="flex justify-center grid grid-cols-1 items-center">
              <span className="text-2xl font-bold text-center m-auto text-[#4F4A45] font-bold">
                Hey, We have Recieved you request!
              </span>
              <p className="flex justify-center text-[#4F4A45] font-semibold">
                You will recieve a call from us between the time slot selected
                by you.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-black"
            >
              Full Name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
              {...register('name', { required: true })}
            />
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-black"
              >
                Email Address
              </label>
              <input
                type="email"
                placeholder="example@domain.com"
                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                {...register('email', { required: true })}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="phone"
                className="mb-3 block text-base font-medium text-black"
              >
                Phone Number
              </label>
              <input
                type="phone"
                placeholder="9999999999"
                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                {...register('phone_number', { required: true })}
              />
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-black"
            >
              Time Slot
            </label>
            <select
              id="underline_select"
              {...register('time_slot', { required: false })}
              className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            >
              <option selected>Choose Your Slot</option>
              <option value="8-12">8:00AM - 11:59AM </option>
              <option value="12-4">12:00PM - 03:59PM </option>
              <option value="4-8">04:00PM - 07:59PM</option>
              <option value="8-11">08:00PM - 11:00PM</option>
            </select>
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium text-black"
            >
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Type your message"
              className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
              {...register('message', { required: true })}
            ></textarea>
          </div>
          <div>
            <button className="hover:bg-[#fbbf24] hover:text-black rounded-md bg-[#1b2528] py-3 px-8 text-white font-semibold text-white outline-none">
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default Contact
