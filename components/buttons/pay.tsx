

"use client";
import { useRouter } from 'next/navigation'
export default async function ClientComponent () {
    const router = useRouter()
    return (
        <div className="w-full lg:my-8 p-4 pt-6 md:p-0 z-10 md:z-auto">
                <button
                onClick={() => router.push('/userInfo')}
                className="w-full py-3 flex justify-center gap-x-2 items-center bg-[#feca3a] hover:bg-[rgba(254,194,27,1)] focus:bg-[rgba(248,183,1,1)] active:bg-[rgba(248,183,1,1)] text-black text-base font-medium rounded-md transition-colors shadow disabled:bg-[#b2b2b2] disabled:opacity-75">
                <span>Proceed to pay ₹</span>
                </button>
                <div className="flex justify-center mt-3 md:mt-4">
                <img alt="" loading="lazy" width="341" height="19" decoding="async" src="/images/services/pay.svg"
                    className="max-h-[14px]" style={{ color: 'transparent' }} />
                </div>
            </div>
    )
}