import Contact from '@/components/ContactUs/Contact'

export const metadata = {
title: `Contact Us - Burning Jobs`,
description: `Have questions? Contact Burning Jobs.`,
}

export default async function ContactUs() {
return (
    <div className="my-24 mt-40 md:px-6" style={{paddingTop:'50px'}}>
    <section className="mb-32 m-auto">
        <div className="px-6 md:px-12">
        <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-3 py-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
            <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                <Contact></Contact>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12" >
                <div className="flex flex-wrap">
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="flex items-start">
                    <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            className="h-4 w-4 md:h-6 md:w-6"
                        >
                            <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                            />
                        </svg>
                        </div>
                    </div>
                    <div className="ml-6 grow">
                        <p className="mb-2 font-bold text-[#4F4A45] text-xs md:text-base">
                        Business related queries
                        </p>
                        <p className="text-gray-600 text-xs md:text-base">
                        burningjobs@exemplar.co.in
                        </p>
                        <p className="text-gray-600 text-xs md:text-base">
                        +91 79865 73918
                        </p>
                    </div>
                    </div>
                </div>
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="flex items-start">
                    <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            className="h-4 w-4 md:h-6 md:w-6"
                        >
                            <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                            />
                        </svg>
                        </div>
                    </div>
                    <div className="ml-6 grow">
                        <p className="mb-2 font-bold text-[#4F4A45] text-xs md:text-base">
                        Customer queries
                        </p>
                        <p className="text-gray-600 text-xs md:text-base">
                        burningjobs@exemplar.co.in
                        </p>
                        <p className="text-gray-600 text-xs md:text-base">
                        +91 79865 73918
                        </p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-12/12">
                <div className="flex items-start">
                    <div className="shrink-0">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        id="IconChangeColor"
                        className="h-4 w-4 md:h-6 md:w-6"
                        >
                        <path
                            d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                            id="mainIconPathAttribute"
                            fill="green"
                        ></path>
                        </svg>
                    </div>
                    </div>
                    <div className="ml-6 grow">
                    <p className="mb-2 font-bold text-[#4F4A45] text-xs md:text-base">
                        Text us on whatsapp for faster response:
                    </p>
                    <p className="text-gray-600 text-xs md:text-base">
                        +91 79865 73918
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
    </div>
)
}
