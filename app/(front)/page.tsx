/* eslint-disable @next/next/no-img-element */
import ProductItem from '@/components/products/ProductItem'
import SocialItem from '@/components/socials/SocialItem'
import productService from '@/lib/services/productService'
import { convertDocToObj } from '@/lib/utils'
import { Metadata } from 'next'
import Link from 'next/link'
import FrequentlyAskedQuestions from '@/components/faq/FrequentlyAskedQuestions'
import Card from '@/components/Benifits'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import InstagramEmbed from '@/components/InstagramEmbed'
import SocialMedia from '@/components/socialMedia/SocialMedia'

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || 'Nani Bilona Ghee',
  description:
    process.env.NEXT_PUBLIC_APP_DESC ||
    'Nextjs, Server components, Next auth, daisyui, zustand',
}
const cards = [
  {
    imageSrc: 'benefits/1.png',
    heading: 'Boosts Immune System & Prevents Infections.',
  },
  {
    imageSrc: 'benefits/2.png',
    heading: 'Maintains Healthy Heart',
  },
  {
    imageSrc: 'benefits/3.png',
    heading: 'Slow Down Ageing Process',
  },
  {
    imageSrc: 'benefits/4.png',
    heading: 'Promotes Healthy Pregnancy',
  },
  {
    imageSrc: 'benefits/5.png',
    heading: 'Improves Eye Sight/Vision',
  },
  {
    imageSrc: 'benefits/6.png',
    heading: 'Promotes Digestion & Boosts Energy Level',
  },
  {
    imageSrc: 'benefits/7.png',
    heading: 'Lubricates Joints & Reduces Pain',
  },
  {
    imageSrc: 'benefits/8.png',
    heading: 'Promotes Bone Density & Strength',
  },
  {
    imageSrc: 'benefits/9.png',
    heading: 'Cleanses Liver',
  },
  {
    imageSrc: 'benefits/10.png',
    heading: 'Helps in Weight Management',
  },
  // Add more cards as needed
]
export default async function Home() {
  const featuredProducts = await productService.getFeatured()
  const latestProducts = await productService.getLatest()
  const latestSocialMedia = await productService.getSocialMedia()
  const latestBanners = await productService.getBanners()
  const latestFaqs = await productService.getFaq()
  return (
    <>
      <div className="w-full carousel rounded-box overflow-hidden">
        {latestBanners.map((banner, index) => (
          <div
            key={banner._id}
            id={`slide-${index}`}
            className="carousel-item relative w-full"
          >
            <Link href={`/product/${banner.slug}`}>
              <img src={banner.image} className="w-full" alt={banner.name} />
            </Link>

            <div
              className="absolute flex justify-between transform 
               -translate-y-1/2 left-5 right-5 top-1/2"
            >
              <a
                href={`#slide-${
                  index === 0 ? featuredProducts.length - 1 : index - 1
                }`}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href={`#slide-${
                  index === featuredProducts.length - 1 ? 0 : index + 1
                }`}
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
      <h2
        className={`text-4xl py-2 ${
          latestProducts.length === 2 ? 'text-center' : ''
        } text-yellow-500`}
        id="product-section"
      >
        Latest Products
      </h2>
      <div
        className={`grid ${
          latestProducts.length === 2
            ? 'grid-cols-2'
            : 'md:grid-cols-3 lg:grid-cols-4'
        } gap-4`}
      >
        {latestProducts.map((product) => (
          <ProductItem key={product.slug} product={convertDocToObj(product)} />
        ))}
      </div>

      <h1 className="text-2xl py-2" id="social-media-section">
        Join us on Social Media
      </h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {latestSocialMedia.map((social) => (
          <SocialItem key={social.slug} social={convertDocToObj(social)} />
        ))}
      </div>

      <FrequentlyAskedQuestions AllFaq={latestFaqs}></FrequentlyAskedQuestions>

      <div className="container mx-auto my-8">
        <h1 className="text-3xl font-bold mb-4">Benefits of A2 Cow Ghee</h1>
        <Card cards={cards} />
      </div>

      <WhatsAppWidget></WhatsAppWidget>

      {/* <InstagramEmbed></InstagramEmbed> */}
      {/* <SocialMedia></SocialMedia> */}
    </>
  )
}
