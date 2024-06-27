
import ProductItem from '@/components/products/ProductItem'
import SocialItem from '@/components/socials/SocialItem'
import productService from '@/lib/services/productService'
import { convertDocToObj } from '@/lib/utils'
import { Metadata } from 'next'
import Link from 'next/link'
import FrequentlyAskedQuestions from '@/components/faq/FrequentlyAskedQuestions'
import Card from '@/components/Benifits'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import dynamic from 'next/dynamic'
import GheeMaking from '@/components/GheeMaking'
import CustomerReviewVideo from '@/components/CustomerReviewVideo'
import VideoCarousel from '@/components/videoCarousel/VideoCarousel'
import CustomerReviewCarousel from '@/components/CustomerReviewCarousel'
import MainCarousel from '@/components/MainCarousel'
import MainCarousel1 from '@/components/MainCarousel1'
import Hero from '@/components/Hero/Hero'
import About from './about-us/page'
import smoothScroll from '../smoothScroll'
import Services from '@/components/services/page'
import Features from '@/components/Features/features'

// import CompleteProcessLoopVideo from '@/components/CompleteProcessLoopVideo'
// import Slider from '@/components/slider/Slider'
// import UseSlider from '@/components/slider/UseSlider'
import Contact from '@/components/ContactUs/Contact'

const Slider = dynamic(() => import('@/components/slider/Slider'), {
  ssr: false,
})

export const metadata: Metadata = {
  title: `Nani's Bilona Ghee`,
  description: `Nani's Bilona Ghee Love Purity Deliciousness A2 Cow Ghee Buffalo Ghee Shop Now.`,
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

interface CarouselItem {
  title: string
  description: string
  image: string
}

const items: CarouselItem[] = [
  {
    title: 'Kiran Yadav',
    description:
      "Nani's Bilona Ghee has become a staple in my kitchen! The aroma and taste remind me of the ghee my grandmother used to make. Knowing it's crafted from Sahiwal cow's milk using the traditional bilona method gives me confidence in its purity and quality.",
    image: '/images/customers/customer1.jpeg',
  },
  {
    title: 'Rahul Jakhar',
    description:
      "I've tried various brands claiming to offer authentic A2 cow ghee, but none match the richness and texture of Nani's Bilona Ghee. It's evident that they prioritize traditional methods and high-quality ingredients. My morning chai wouldn't be the same without it!",
    image: '/images/customers/customer2.jpeg',
  },
  {
    title: 'Ranju jha',
    description:
      "As a health-conscious consumer, finding pure A2 cow ghee was a priority for me. Nani's Bilona Ghee not only meets but exceeds my expectations. Its golden hue and smooth consistency speak volumes about its craftsmanship. I use it in cooking, and it elevates the flavor of every dish!",
    image: '/images/customers/customer3.jpeg',
  },
  {
    title: 'Vishwajeet bhori',
    description:
      "Nani's Bilona Ghee has a distinct taste that sets it apart from other brands. Its nutty flavor and creamy texture add depth to my meals. I appreciate the care they put into sourcing Sahiwal cow's milk and using traditional methods. It's a product I trust for its purity and authenticity.",
    image: '/images/customers/customer4.jpeg',
  },
  {
    title: 'Naveen sihag',
    description:
      "I've been incorporating more Ayurvedic practices into my lifestyle, and Nani's Bilona Ghee fits perfectly into that philosophy. It's not just ghee; it's a holistic experience. I feel nourished knowing I'm consuming a product crafted with mindfulness and reverence for tradition.",
    image: '/images/customers/customer5.jpeg',
  },
  {
    title: 'Neelam Raghav',
    description:
      "Nani's Bilona Ghee has become a kitchen essential for me. Whether I'm sautéing vegetables or drizzling it over warm rotis, its rich flavor enhances every dish. I appreciate their commitment to preserving the purity of A2 cow ghee through the traditional bilona method.",
    image: '/images/customers/customer6.jpeg',
  },
  {
    title: 'Sourav',
    description:
      "Nani's Bilona Ghee has earned a permanent spot in my pantry. Its purity and flavor are unmatched by any other brand I've tried. I love supporting a company that values tradition and quality, and it's evident in every spoonful of this delicious ghee.",
    image: 'images/customers/customer7.jpg',
  },

  // Add more items as needed
]



export default async function Home() {
  const featuredProducts = await productService.getFeatured()
  const latestProducts = await productService.getLatest()
  const latestSocialMedia = await productService.getSocialMedia()
  const latestBanners = await productService.getBanners()
  const latestFaqs = await productService.getFaq()
  const photoGallery = await productService.getPhotos()
  
  return (
    <>
      {/* <CompleteProcessLoopVideo></CompleteProcessLoopVideo> */}
      {/* <MainCarousel></MainCarousel> */}
      <Hero></Hero>
      {/* <MainCarousel1></MainCarousel1> */}

      {/* <h2
        className="mb-4 text-2xl md:text-3xl font-extrabold leading-none tracking-tight text-[#1b2528] md:text-4xl lg:text-5xl text-center py-6"
        id="product-section"
      >
        Latest Products
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center m-auto mb-10">
        {latestProducts.map((product) => (
          <ProductItem key={product.slug} product={convertDocToObj(product)} />
        ))}
      </div> */}
      <Services></Services>

      {/* <VideoCarousel></VideoCarousel> */}
      <About></About>
      <Features></Features>

      <div style={{ backgroundColor: '#fffbe8' }} className="pt-10 pb-10 mt-10">
        <div
          className="container m-auto"
          style={{ backgroundColor: '#fffbe8' }}
        >
          <h1
            className="text-2xl md:text-3xl font-bold mb-4 text-center text-[#1b2528]"
            id="customer-review-section"
          >
            Customer Reviews
          </h1>
          <CustomerReviewCarousel items={items} />
        </div>
      </div>

      <div className="my-8 m-auto pt-5" style={{ backgroundColor: '#ffffff' }}>
        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center text-[#1b2528]">
          Benefits of A2 Cow Ghee
        </h1>
        <Card cards={cards} />
      </div>

      <WhatsAppWidget></WhatsAppWidget>

      {/* <Slider photos={photoGallery}></Slider> */}

      {/* <FrequentlyAskedQuestions AllFaq={latestFaqs}></FrequentlyAskedQuestions> */}
    </>
  )
}
