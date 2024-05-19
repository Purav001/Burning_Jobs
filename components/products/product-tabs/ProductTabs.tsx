'use client'

import Back from '@/components/icons/back'
import FastDelivery from '@/components/icons/fast-delivery'
import Refresh from '@/components/icons/refresh'

import Accordion from './accordion'
import { Product } from '@/lib/models/ProductModel'

type ProductTabsProps = {
  product: Product
}

export default function ProductTabs({ product }: ProductTabsProps) {
  const tabs = [
    {
      label: 'Product Information',
      component: <ProductInfoTab product={product} />,
    },
    {
      label: 'Shipping & Returns',
      component: <ShippingInfoTab />,
    },
  ]

  return (
    <div className="w-full">
      <Accordion type="multiple">
        {tabs.map((tab, i) => (
          <Accordion.Item
            key={i}
            title={tab.label}
            headingSize="medium"
            className="text-xs md:text-base"
            value={tab.label}
          >
            {tab.component}
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}

const ProductInfoTab = ({ product }: ProductTabsProps) => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-medium text-gray-600">Biological Source</span>
            <p className="text-[#4F4A45] font-semibold">
              {product.source ? product.source : 'Shaiwal Cow'}
            </p>
          </div>
          <div>
            <span className="font-medium text-gray-600">Country of origin</span>
            <p className="text-[#4F4A45] font-semibold">
              {product.origin_country ? product.origin_country : 'India'}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-medium text-gray-600">Process Making</span>
            <p className="text-[#4F4A45] font-semibold">
              {product.making ? product.making : 'Ayurvedic Bilona Method'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const ShippingInfoTab = () => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-1 gap-y-8">
        <div className="flex items-start gap-x-2">
          <FastDelivery className="text-[#4F4A45] font-bold" />
          <div>
            <span className="text-[#4F4A45] font-semibold">Fast delivery</span>
            <p className="max-w-sm font-medium text-gray-600">
              Your package will arrive in 2-5 business days at your pick up
              location or in the comfort of your home.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Refresh className="text-[#4F4A45] font-bold" />
          <div>
            <span className="text-[#4F4A45] font-semibold">
              Simple exchanges
            </span>
            <p className="max-w-sm font-medium text-gray-600">
              please look into{' '}
              <a href="/refund-policy" className="text-[#1b2528] font-bold">
                refund policy{' '}
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Back className="text-[#4F4A45] font-bold" />
          <div>
            <span className="text-[#4F4A45] font-semibold">Easy returns</span>
            <p className="max-w-sm font-medium text-gray-600">
              please look into{' '}
              <a href="/refund-policy" className="text-[#1b2528] font-bold">
                refund policy{' '}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
