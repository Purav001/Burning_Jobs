'use client'
import React, { useEffect, useState } from 'react';
import './pay.css'
import axios from 'axios';
import { useSearchParams } from 'next/navigation';

interface ServiceData {
    id: number
    imageSrc: string
    imageSrcSet: string
    title: string
    description: string
    link: string
    price: number
}
interface PayComponentProps {
    id: number;
}

const InterviewCourse = ({id} : {id:Number}) => {
    const [data, setData] = useState<ServiceData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get(`api/services/[id]/${id}`);
            setData(response.data);
        } catch (error) {
            
        } finally {
            setLoading(false);
        }
        };

        fetchData();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error:</p>;
    if (!data) return <p>No data available</p>;
    return (
        <div className="response grid grid-cols-1 md:grid-cols-2 bg-white md:min-h-screen overflow-x-hidden pt-10" style={{minHeight: '100%'}}>
        <div className=" bg-white md:px-6 lg:px-12 xl:px-16 2xl:px-20 min-h-screen">
            <div className=" w-full max-w-[425px] mt-[75px] ml-auto px-4 md:px-0  mb-32 md:mb-0">
            <div className="mb-4">
                <h1 className="text-[#050505] font-semibold text-xl lg:text-2xl mb-2 font-['Poppins']">
                {data.title}
                </h1>
                <p className="text-[#656565] text-xs lg:text-xs font-[Inter] mb-2">
                by <span className="text-[#3f3f3f] font-medium">Diksha Arora</span>
                </p>
                <p className="hidden md:block text-[#050505] text-3xl font-semibold">₹3799</p>
                <p className="text-[#656565] text-xs font-light">(inclusive of GST)</p>
            </div>
            <div className="service_description mt-16 mb-4 font-[Inter]">
                <p className='text-[#000]'>
                This course has been designed to provide both freshers and experience holders with an all-round
                preparation for acing their job interviews. You will learn all aspects related to job interviews which
                includes the right technique to open your interview, most frequently asked interview questions and 200+
                sample answers that will fit any job role. Most important, learn the exact strategy that you need to
                negotiate your salary so that you get what is rightfully yours. Once you will complete the course, you
                will walk into the interview room well prepared to handle any tricky situation.
                </p>
            </div>
            <div className='divider'></div>
            <div className="service_details-footer py-4 font-[Inter]">
                <p className="text-[11px] text-[#656565] mb-6">
                You agree to share information entered on this page with Burning Jobs (owner of this page) and Razorpay,
                adhering to applicable laws.
                </p>
                <div className="flex gap-x-4 text-[#3f3f3f] response text-xs">
                <span>Burning Jobs</span>
                <a href="/privacy" target="_blank" className="cursor-pointer underline">
                    Privacy
                </a>
                <a href="/terms" target="_blank" className="cursor-pointer underline">
                    Terms
                </a>
                </div>
            </div>
            </div>
        </div>
        <div
            className="relative bg-[#f5f7f9] md:px-6 lg:px-12 xl:px-16 2xl:px-20 border-l border-color-[#e4e6eb] font-[Inter]">
            <div className="relative w-full max-w-[425px] mt-[75px] mr-auto px-4 sm:px-0 mb-44 md:mb-0">
            <div className="mb-8">
                <h1 className="text-[#050505] font-semibold text-lg mb-2 font-['Poppins']">Payment Details</h1>
                <p className="text-[#656565] text-sm">Complete your purchase by providing your payment details.</p>
            </div>
            <div className="mb-4">
                <button className="flex bg-white items-center px-3 cursor-pointer w-full h-[44px] gap-x-2 border-[0.5px] border-[#e6e9f2] rounded-md shadow-sm"
                title="Click here to apply coupon">
                <img alt="" loading="lazy" width="24" height="24" decoding="async"
                    src="/_next/static/media/coupon.4b281d07.svg" className="h-[22px]" style={{ color: 'transparent' }} />
                <p className="text-[15px] text-[#050505] font-medium">Have a coupon?</p>
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
                    strokeLinejoin="round" className="text-[#3f3f3f] text-xl ml-auto" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                </button>
            </div>
            <div className="relative payment_summary bg-white rounded-b-md shadow-sm border-[0.5px] border-[#e6e9f2] mb-4">
                <div className="payment_summary-cutout relative bg-transparent h-4 z-[1] m-[-20px_0px_24px]">
                </div>
                <div className="flex flex-col gap-y-3">
                <div className="px-3 md:px-6">
                    <p className="text-[#3f3f3f] font-medium mb-1">Service</p>
                    <div className="flex flex-col gap-y-1">
                    <div className="flex justify-between text-sm gap-x-12 lg:gap-x-16 items-center">
                        <div className="text-[#656565]">
                        <p className="text-xs">ULTIMATE INTERVIEW PREPARATION COURSE</p>
                        </div>
                        <div className="text-[#3f3f3f] font-medium">₹3219.49</div>
                    </div>
                    </div>
                </div>
                <div className="flex justify-between text-sm gap-x-12 lg:gap-x-16 px-3 md:px-6">
                    <div className="text-[#3f3f3f] font-medium">GST</div>
                    <div className="text-[#3f3f3f] font-medium">₹579.51</div>
                </div>
                <div className="flex justify-between text-sm border-t border-[#ced0d4] py-3 gap-x-12 lg:gap-x-16 px-3 md:px-6 border-dashed">
                    <div className="text-[#050505] font-medium">Amount to be paid :</div>
                    <span className="text-[#050505] font-semibold text-right">₹3799.00</span>
                </div>
                </div>
            </div>
            <div className="mb-4">
                <button className="flex bg-white items-center pl-[14px] pr-3 cursor-pointer w-full h-[44px] gap-x-[10px] border-[0.5px] border-[#e6e9f2] rounded-md shadow-sm"
                title="Click here to add your GST informations">
                <img alt="" loading="lazy" width="16" height="20" decoding="async"
                    src="/_next/static/media/gst.14f74afd.svg" className="h-[18px]" style={{ color: 'transparent' }} />
                <p className="text-[15px] text-[#050505] font-medium">Add GST <small>(optional)</small></p>
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
                    strokeLinejoin="round" className="text-[#3f3f3f] text-xl ml-auto" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                </button>
            </div>
            <div className="w-full lg:my-8 p-4 pt-6 md:p-0 z-10 md:z-auto">
                <button
                className="w-full py-3 flex justify-center gap-x-2 items-center bg-[#feca3a] hover:bg-[rgba(254,194,27,1)] focus:bg-[rgba(248,183,1,1)] active:bg-[rgba(248,183,1,1)] text-black text-base font-medium rounded-md transition-colors shadow disabled:bg-[#b2b2b2] disabled:opacity-75">
                <span>Proceed to pay ₹3799.00</span>
                </button>
                <div className="flex justify-center mt-3 md:mt-4">
                <img alt="" loading="lazy" width="341" height="19" decoding="async" src="/images/services/pay.svg"
                    className="max-h-[14px]" style={{ color: 'transparent' }} />
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default InterviewCourse;
