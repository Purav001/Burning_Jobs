
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
import CustomerReviewCarousel from '@/components/testimonials/CustomerReviewCarousel'
import MainCarousel from '@/components/MainCarousel'
import MainCarousel1 from '@/components/MainCarousel1'
import Hero from '@/components/Hero/Hero'
import About from './about-us/page'
import Services from '@/components/services/page'
import Features from '@/components/Features/features'
import TestiHeading from '@/components/testimonials/testiHeading'
import Contact from '@/components/ContactUs/Contact'

const Slider = dynamic(() => import('@/components/slider/Slider'), {
  ssr: false,
})

export const metadata: Metadata = {
  title: `Burning Jobs`,
  description: `Our client centric approach make us the best.`,
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
  name: string
  company: string
  description: string
  imageUrl: string
  imageSizes: {
    size: number;
    url: string; 
  }[];
}

const items: CarouselItem[] = [
  {
    name: 'Akhil',
    company: 'Capgemini',
    description: 'I got placed in Capgemini as Data Privacy Consultant with 100% hike. Thank you Diksha Mam for your mentorship and guidance. I would definitely recommend her interview preparation and resume building services to all the job seekers!',
    imageUrl: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322.png',
    imageSizes: [
      { size: 500, url: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322-p-500.png' },
      { size: 800, url: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322-p-800.png' },
      { size: 972, url: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322.png' },
    ],
  },
  {
    name: 'Akhil',
    company: 'Capgemini',
    description: 'I got placed in Capgemini as Data Privacy Consultant with 100% hike. Thank you Diksha Mam for your mentorship and guidance. I would definitely recommend her interview preparation and resume building services to all the job seekers!',
    imageUrl: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322.png',
    imageSizes: [
      { size: 500, url: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322-p-500.png' },
      { size: 800, url: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322-p-800.png' },
      { size: 972, url: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322.png' },
    ],
  },
  {
    name: 'Akhil',
    company: 'Capgemini',
    description: 'I got placed in Capgemini as Data Privacy Consultant with 100% hike. Thank you Diksha Mam for your mentorship and guidance. I would definitely recommend her interview preparation and resume building services to all the job seekers!',
    imageUrl: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322.png',
    imageSizes: [
      { size: 500, url: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322-p-500.png' },
      { size: 800, url: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322-p-800.png' },
      { size: 972, url: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322.png' },
    ],
  },
  {
    name: 'Akhil',
    company: 'Capgemini',
    description: 'I got placed in Capgemini as Data Privacy Consultant with 100% hike. Thank you Diksha Mam for your mentorship and guidance. I would definitely recommend her interview preparation and resume building services to all the job seekers!',
    imageUrl: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322.png',
    imageSizes: [
      { size: 500, url: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322-p-500.png' },
      { size: 800, url: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322-p-800.png' },
      { size: 972, url: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322.png' },
    ],
  },
  {
    name: 'Akhil',
    company: 'Capgemini',
    description: 'I got placed in Capgemini as Data Privacy Consultant with 100% hike. Thank you Diksha Mam for your mentorship and guidance. I would definitely recommend her interview preparation and resume building services to all the job seekers!',
    imageUrl: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322.png',
    imageSizes: [
      { size: 500, url: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322-p-500.png' },
      { size: 800, url: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322-p-800.png' },
      { size: 972, url: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322.png' },
    ],
  },
  {
    name: 'Akhil',
    company: 'Capgemini',
    description: 'I got placed in Capgemini as Data Privacy Consultant with 100% hike. Thank you Diksha Mam for your mentorship and guidance. I would definitely recommend her interview preparation and resume building services to all the job seekers!',
    imageUrl: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322.png',
    imageSizes: [
      { size: 500, url: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322-p-500.png' },
      { size: 800, url: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322-p-800.png' },
      { size: 972, url: 'https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca39bb57893213f35ec9a0_Akhil-fotor-2023080216322.png' },
    ],
  },

  // Add more items as needed
];



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

      <Services></Services>

      {/* <VideoCarousel></VideoCarousel> */}
      <About></About>
      <Features></Features>

      <TestiHeading></TestiHeading>
          <div className="center slick-initialized slick-slider slick-dotted">
            <div className="slick-list draggable" style={{ padding: '0px 80px' }}>
              <div className="slick-track" style={{ opacity: 1, width: '100vw', transform: 'translate3d(-80px, 0px, 0px)' }}>
                <CustomerReviewCarousel items={items} />
              </div>
            </div>
          </div>
      
        
      {/* <div className="my-8 m-auto pt-5" style={{ backgroundColor: '#ffffff' }}>
        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center text-[#1b2528]">
          Benefits of A2 Cow Ghee
        </h1>
        <Card cards={cards} />
      </div> */}

      <WhatsAppWidget></WhatsAppWidget>

      {/* <Slider photos={photoGallery}></Slider> */}

      {/* <FrequentlyAskedQuestions AllFaq={latestFaqs}></FrequentlyAskedQuestions> */}
    </>
  )
}
