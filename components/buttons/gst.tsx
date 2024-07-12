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
const [formData, setFormData] = useState({
    gstNumber: '',
    gstRegistrationName: '',
    gstRegistrationAddress: '',
    gstState: ''
});
const handleChange2 = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
};

return (
    <div>
                        {!showCouponInput ? (
                            <div className="mb-4">
                                <button
                                className="flex bg-white items-center pl-[14px] pr-3 cursor-pointer w-full h-[44px] gap-x-[10px] border-[0.5px] border-[#e6e9f2] rounded-md shadow-sm"
                                title="Click here to add your GST information"
                                onClick={toggleCouponInput}
                                >
                                <img
                                    alt=""
                                    loading="lazy"
                                    width="16"
                                    height="20"
                                    decoding="async"
                                    src="/images/services/gst.svg"
                                    className="h-[18px]"
                                    style={{ color: 'transparent' }}
                                />
                                <p className="text-[15px] text-[#050505] font-medium">
                                    <strong>Add GST <small>(optional)</small></strong>
                                </p>
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
                            <div className="bg-white border-[0.5px] border-[#e6e9f2] rounded-md shadow-sm p-3">
                            <div className="mb-2 flex items-center justify-between">
                                <p className="text-[15px] text-[#3f3f3f] font-medium mb-1"><strong>GST information</strong></p>
                            </div>
                            <div className="stacked_form-fields bg-white w-full border border-[#e6e9f2] rounded-md">
                                <div>
                                <input
                                    type="text"
                                    placeholder="GSTIN"
                                    name="gstNumber"
                                    className="px-3 bg-[#fff] text-sm w-full h-[44px] focus:outline-none text-[#3f3f3f] border border-transparent focus:ring-1 focus:ring-[#feca3a] focus:border-[#feca3a] invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                                    value={formData.gstNumber}
                                    onChange={handleChange2}
                                />
                                </div>
                                <div>
                                <input
                                    type="text"
                                    placeholder="Registration name"
                                    name="gstRegistrationName"
                                    className="px-3 bg-[#fff] text-sm w-full h-[44px] focus:outline-none text-[#3f3f3f] border border-transparent focus:ring-1 focus:ring-[#feca3a] focus:border-[#feca3a]"
                                    value={formData.gstRegistrationName}
                                    onChange={handleChange2}
                                />
                                </div>
                                <div>
                                <input
                                    type="text"
                                    name="gstRegistrationAddress"
                                    placeholder="Registration address"
                                    className="px-3 bg-[#fff] text-sm w-full h-[44px] focus:outline-none text-[#3f3f3f] border border-transparent focus:ring-1 focus:ring-[#feca3a] focus:border-[#feca3a]"
                                    value={formData.gstRegistrationAddress}
                                    onChange={handleChange2}
                                />
                                </div>
                                <div>
                                <select
                                    className="px-2 bg-[#fff] text-sm w-full h-[44px] focus:outline-none text-[#3f3f3f] border border-transparent focus:ring-1 focus:ring-[#feca3a] focus:border-[#feca3a] cursor-pointer"
                                    name="gstState"
                                    value={formData.gstState}
                                    onChange={handleChange2}
                                >
                                    <option value="">Select GST state</option>
                                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                                    <option value="Daman and Diu">Daman and Diu</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Lakshadweep">Lakshadweep</option>
                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Puducherry">Puducherry</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="West Bengal">West Bengal</option>
                                </select>
                                </div>
                            </div>
                            </div>
                        </div>
                        )}
        </div>
);
}
