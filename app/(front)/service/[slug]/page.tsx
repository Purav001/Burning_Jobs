import productService from '@/lib/services/services'
import { convertDocToObj } from '@/lib/utils'
import Coupon from '@/components/buttons/coupon'
import Gst from '@/components/buttons/gst'
import PayButton from '@/components/buttons/pay'
export async function generateMetadata({
    params,
}: {
    params: { slug: string }
}) {
    const service = await productService.getBySlug(params.slug)
    if (!service) {
    return { title: `${params.slug}` }
    }
    return {
    title: service.title + `Burning Jobs`,
    description: service.description,
    }
}

export default async function ServiceDetails ({
    params,
} : {
    params: {title : string}
}){
    
    const service = await productService.getBySlug(params.title)
    // const latestProducts = await productService.getLatest()
    // const relatedProducts = latestProducts.filter(
    //     (curservice) => curservice.title !== service.title
    // )
    if(!service){
        return <div>Product not found</div>
    }
    return (
    <div className="response grid grid-cols-1 md:grid-cols-2 bg-white md:min-h-screen overflow-x-hidden pt-10" style={{minHeight: '100%'}}>
        <div className=" bg-white md:px-6 lg:px-12 xl:px-16 2xl:px-20 min-h-screen">
            <div className=" w-full max-w-[425px] mt-[75px] ml-auto px-4 md:px-0  mb-32 md:mb-0">
                <div className="mb-4">
                    <h1 className="text-[#050505] font-semibold text-xl lg:text-2xl mb-2 font-['Poppins']">
                    {service.title}
                    </h1>
                    <p className="text-[#656565] text-xs lg:text-xs font-[Inter] mb-2">
                    by <span className="text-[#3f3f3f] font-medium">Sunil Kumar</span>
                    </p>
                    <p className="hidden md:block text-[#050505] text-3xl font-semibold">₹{service.price}</p>
                    <p className="text-[#656565] text-xs font-light">(inclusive of GST)</p>
                </div>
            <div className="service_description mt-16 mb-4 font-[Inter]">
                <p className='text-[#000]'>
                {service.link}
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
            <div>
                <Coupon />
            </div>
            
            <div className="relative payment_summary bg-white rounded-b-md shadow-sm border-[0.5px] border-[#e6e9f2] mb-4">
                <div className="payment_summary-cutout relative bg-transparent h-4 z-[1] m-[-20px_0px_24px]">
                </div>
                <div className="flex flex-col gap-y-3">
                <div className="px-3 md:px-6">
                    <p className="text-[#3f3f3f] font-medium mb-1"><strong>Service</strong></p>
                    <div className="flex flex-col gap-y-1">
                    <div className="flex justify-between text-sm gap-x-12 lg:gap-x-16 items-center">
                        <div className="text-[#656565]">
                        <p className="text-xs">{service.title}</p>
                        </div>
                        <div className="text-[#3f3f3f] font-medium"><strong>₹{service.price-(service.price*18/100)}</strong></div>
                    </div>
                    </div>
                </div>
                <div className="flex justify-between text-sm gap-x-12 lg:gap-x-16 px-3 md:px-6">
                    <div className="text-[#3f3f3f] font-medium"><strong>GST</strong></div>
                    <div className="text-[#3f3f3f] font-medium"><strong>₹{service.price*18/100}</strong></div>
                </div>
                <div className="flex justify-between text-sm border-t border-[#ced0d4] py-3 gap-x-12 lg:gap-x-16 px-3 md:px-6 border-dashed">
                    <div className="text-[#050505] font-medium"><strong>Amount to be paid :</strong></div>
                    <span className="text-[#050505] font-semibold text-right">₹{service.price}</span>
                </div>
                </div>
            </div>
            <div>
                <Gst />
            </div>
            {/* <div className="w-full lg:my-8 p-4 pt-6 md:p-0 z-10 md:z-auto">
                <button
                onClick={() => router.push('/userInfo')}
                className="w-full py-3 flex justify-center gap-x-2 items-center bg-[#feca3a] hover:bg-[rgba(254,194,27,1)] focus:bg-[rgba(248,183,1,1)] active:bg-[rgba(248,183,1,1)] text-black text-base font-medium rounded-md transition-colors shadow disabled:bg-[#b2b2b2] disabled:opacity-75">
                <span>Proceed to pay ₹{service.price}</span>
                </button>
                <div className="flex justify-center mt-3 md:mt-4">
                <img alt="" loading="lazy" width="341" height="19" decoding="async" src="/images/services/pay.svg"
                    className="max-h-[14px]" style={{ color: 'transparent' }} />
                </div>
            </div> */}
                <PayButton />
            </div>
        </div>
        </div>
    )
}