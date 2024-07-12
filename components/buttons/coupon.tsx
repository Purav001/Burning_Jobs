// components/ClientComponent.tsx
"use client";

import { SetStateAction, useState } from 'react';

export default function ClientComponent() {
const [coupon, setCoupon] = useState('');

const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setCoupon(e.target.value);
};
const [showCouponInput, setShowCouponInput] = useState(false);

const toggleCouponInput = () => {
    setShowCouponInput(!showCouponInput);
};

return (
    <div>
                        {!showCouponInput ? (
                            <div className="mb-4">
                            <button
                                className="flex bg-white items-center px-3 cursor-pointer w-full h-[44px] gap-x-2 border-[0.5px] border-[#e6e9f2] rounded-md shadow-sm"
                                title="Click here to apply coupon"
                                onClick={toggleCouponInput}
                            >
                                <img
                                    alt=""
                                    loading="lazy"
                                    width="24"
                                    height="24"
                                    decoding="async"
                                    src="/images/services/coupon.svg"
                                    className="h-[22px]"
                                    style={{ color: 'transparent' }}
                                />
                                <p className="text-[15px] text-[#050505] font-medium"><strong>Have a coupon? </strong></p>
                                <svg
                                    stroke="currentColor"
                                    fill="none"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-[#3f3f3f] text-xl ml-auto"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </button>
                            </div>
                        ) : (
                            <div className="mb-4">
                                <div className="relative">
                                    <input
                                    type="text"
                                    placeholder="Enter coupon code"
                                    className="text-sm w-full h-[44px] bg-[#fff] text-[#000] pl-3 pr-[120px] border-[0.5px] border-[#e6e9f2] rounded-md focus:outline-none invalid:border-red-500 invalid:text-red-600 shadow-sm"
                                    value={coupon}
                                    onChange={handleChange}
                                    />
                                    <button
                                    disabled={!coupon}
                                    className="absolute right-0 top-3 px-3 disabled:text-[#bdbdbd] text-[#feca3a] hover:text-[rgba(254,194,27,1)] transition-colors font-medium cursor-pointer text-sm flex-shrink-0"
                                    >
                                    Apply Coupon
                                    </button>
                                </div>
                            </div>
                        )}
        </div>
);
}
