import Image from 'next/image'
export const metadata = {
  title: `Our Story - Nani's Bilona Ghee`,
  description: `Unveiling Nani's Bilona Ghee: A Legacy of Love, Tradition & Pure Ghee`,
}
export default async function OurStory() {
  return (
    <>
      <div>
        <div className="container my-10 m-auto  w-full">
          <section className="mb-32">
            <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div className="flex flex-wrap items-center">
                <div className="hidden shrink-0 grow-0 basis-auto lg:pl-5 lg:flex lg:w-6/12 xl:w-4/12">
                  <Image
                    src="/images/team/nani.jpg"
                    alt="Trendy Pants and Shoes"
                    width={100}
                    height={100}
                    className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                  />
                </div>
                <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                  <div className="px-6 py-12 md:px-12">
                    <h2 className="text-sm md:text-2xl font-semibold text-center mb-6 text-[#854e23]">
                      Welcome to Nani&apos;s Bilona Ghee
                    </h2>
                    <Image
                      src="/images/team/nani.jpg"
                      alt="Trendy Pants and Shoes"
                      width={100}
                      height={100}
                      className="w-full rounded-t-lg lg:hidden mb-5"
                    />

                    <p className="text-gray-700 mb-4 text-xs md:text-base">
                      Hi there! I&apos;m AmanDeep Sigar, the founder of
                      nani&apos;s Bilona Ghee, and I&apos;m thrilled to share
                      the heartfelt journey behind our brand.
                    </p>
                    <div className="mb-4">
                      <h2 className="text-sm md:text-lg font-semibold mb-2 text-[#854e23]">
                        Childhood Memories
                      </h2>
                      <p className="text-gray-700 text-xs md:text-base">
                        Growing up in the serene village of Pilimandhopri in
                        Fathabad district, Haryana, my fondest memories revolve
                        around my nani&apos;s kitchen. Those visits were not
                        just about delicious food but about the warmth of family
                        and tradition. One dish that always stood out was
                        nani&apos;s churma, made with love and generously
                        enriched with her homemade cow ghee.
                      </p>
                    </div>
                    <div className="mb-4">
                      <h2 className="text-sm md:text-lg font-semibold mb-2 text-[#854e23]">
                        Discovering the Essence
                      </h2>
                      <p className="text-gray-700 text-xs md:text-base">
                        As the years passed, I began to understand the
                        significance of ghee in our culture and its numerous
                        health benefits. It became apparent to me that this
                        golden elixir, often referred to as the &quot;discovery
                        of India,&quot; held immense potential beyond its
                        delicious taste.
                      </p>
                    </div>
                    <div className="mb-4">
                      <h2 className="text-sm md:text-lg font-semibold mb-2 text-[#854e23]">
                        The Birth of nani&apos;s Bilona Ghee
                      </h2>
                      <p className="text-gray-700 text-xs md:text-base">
                        Driven by nostalgia and a desire to share the goodness
                        of nani&apos;s kitchen with the world, I embarked on a
                        journey to create nani&apos;s Bilona Ghee. It&apos;s not
                        just a business venture; it&apos;s a tribute to the
                        timeless wisdom and flavors of nani&apos;s kitchen, now
                        lovingly crafted and shared with generations to come.
                      </p>
                    </div>
                    <div className="mb-4">
                      <h2 className="text-sm md:text-lg font-semibold mb-2 text-[#854e23]">
                        Our Promise
                      </h2>
                      <p className="text-gray-700 text-xs md:text-base">
                        At nani&apos;s Bilona Ghee, we&apos;re committed to
                        preserving tradition, promoting wellness, and delivering
                        quality. Each dollop of our ghee embodies the essence of
                        nani&apos;s love and the purity of our ingredients. Join
                        us on this delicious journey as we celebrate tradition,
                        health, and the joy of good food.
                      </p>
                    </div>
                    <div className="text-gray-600 text-right italic text-xs md:text-base">
                      <p>Thank you for being a part of our story.</p>
                      <p className="text-xs font-bold md:text-base">
                        AmanDeep Sigar
                        <br />
                        Founder, nani&apos;s Bilona Ghee.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="container my-24 mx-auto md:px-6">
          <section className="mb-32 text-center">
            <h2 className="mb-32 text-base md:text-3xl font-bold text-[#1b2528]">
              Meet the{' '}
              <u className="text-primary dark:text-primary-400">team</u>
            </h2>

            <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
              <div className="mb-24 md:mb-0">
                <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="flex justify-center">
                    <div className="flex justify-center -mt-[75px]">
                      <Image
                        src="/images/team/co-founder1.png"
                        width={100}
                        height={100}
                        className="mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[150px]"
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-4 text-sm md:text-lg font-bold text-[#1b2528]">
                      Amandeep Sigar
                    </h5>

                    <p className="mb-6 text-[#854e23] font-bold text-sm md:text-base">
                      Founder
                    </p>
                    <ul className="mx-auto flex list-inside justify-center items-center">
                      <a
                        href="https://www.instagram.com/amandeepsigar"
                        className="px-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="h-3 w-3 md:h-4 md:w-4 text-primary dark:text-primary-400"
                        >
                          <path
                            fill="currentColor"
                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                          />
                        </svg>
                      </a>
                      <div className="text-[#1b2528]">|</div>
                      <div className="inline-block rounded-md bg-primary-100 ml-1 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          className="h-3 w-3 md:h-4 md:w-4 "
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                          />
                        </svg>
                      </div>
                      <div className="text-[#fbbf24] text-sm md:text-base">
                        +91 8198985878
                      </div>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-24 md:mb-0">
                <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="flex justify-center">
                    <div className="flex justify-center -mt-[75px]">
                      <Image
                        height={100}
                        width={100}
                        src="/images/team/co-founder2.png"
                        className="mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[150px]"
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-4 text-sm md:text-lg font-bold text-[#1b2528]">
                      Subhash Godara
                    </h5>
                    <p className="mb-6 text-[#854e23] font-bold text-sm md:text-base">
                      Manufacturing head
                    </p>
                    <ul className="mx-auto flex list-inside justify-center items-center">
                      <a
                        href="https://www.instagram.com/subhash7427"
                        className="px-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="h-3 w-3 md:h-4 md:w-4  text-primary dark:text-primary-400"
                        >
                          <path
                            fill="currentColor"
                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                          />
                        </svg>
                      </a>
                      <div className="text-[#1b2528]">|</div>
                      <div className="inline-block rounded-md bg-primary-100 ml-1 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          className="h-3 w-3 md:h-4 md:w-4 "
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                          />
                        </svg>
                      </div>
                      <div className="text-[#fbbf24] text-sm md:text-base">
                        +91 7056800805
                      </div>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="flex justify-center">
                    <div className="flex justify-center -mt-[75px]">
                      <Image
                        height={100}
                        width={100}
                        src="/images/team/Social Media Head.png"
                        className="mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[150px]"
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-4 text-sm md:text-lg font-bold text-[#1b2528]">
                      Rohit Sigar
                    </h5>
                    <p className="mb-6 text-[#854e23] font-bold text-sm md:text-base">
                      CTO
                    </p>
                    <ul className="mx-auto flex list-inside justify-center items-center">
                      <a
                        href="https://www.linkedin.com/in/rohit-sigar"
                        className="px-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="h-3 w-3 md:h-4 md:w-4  text-primary dark:text-primary-400"
                        >
                          <path
                            fill="currentColor"
                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                          />
                        </svg>
                      </a>
                      <div className="text-[#1b2528]">|</div>
                      <a
                        href="https://www.instagram.com/rohita_05"
                        className="px-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="h-3 w-3 md:h-4 md:w-4  text-primary dark:text-primary-400"
                        >
                          <path
                            fill="currentColor"
                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                          />
                        </svg>
                      </a>
                      <div className="text-[#1b2528]">|</div>
                      <div className="inline-block rounded-md bg-primary-100 ml-1 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          className="h-3 w-3 md:h-4 md:w-4 "
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                          />
                        </svg>
                      </div>
                      <div className="text-[#fbbf24] text-sm md:text-base">
                        +91 9306273009
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
