import AddToCart from '@/components/products/AddToCart'
import { convertDocToObj } from '@/lib/utils'
import productService from '@/lib/services/productService'
import Image from 'next/image'
import Link from 'next/link'
import { Gallery } from '@/components/products/gallery'
import ProductTabs from '@/components/products/product-tabs/ProductTabs'
import ProductItem from '@/components/products/ProductItem'
import Rating from '@/components/products/Rating'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const product = await productService.getBySlug(params.slug)
  if (!product) {
    return { title: 'Product not found' }
  }
  return {
    title: product.name,
    description: product.description,
  }
}
interface Image {
  url: string
  altText: string
}

export default async function ProductDetails({
  params,
}: {
  params: { slug: string }
}) {
  const product = await productService.getBySlug(params.slug)
  const latestProducts = await productService.getLatest()
  const relatedProducts = latestProducts.filter(
    (curproduct) => curproduct.slug !== product.slug
  )
  if (!product) {
    return <div>Product not found</div>
  }
  return (
    <>
      {/* <div className="my-2">
        <Link href="/">back to products</Link>
      </div> */}
      <div className="grid md:grid-cols-2 md:gap-3 mt-10">
        <div className="md:col-span-1">
          <Gallery
            images={product.images.map((image: Image) => ({
              src: image.url,
              altText: image.altText,
            }))}
          ></Gallery>
        </div>
        <div className="mr-40">
          <ul className="space-y-4">
            <li>
              <h1 className="text-xl font-bold">{product.name}</h1>
            </li>
            <li>
              <Rating rating={product.rating} />
            </li>
            <li> {product.brand}</li>
            <li>
              <div className="divider"></div>
            </li>
            {/* <li>
              Description: <p>{product.description}</p>
            </li> */}
          </ul>

          <div className="card md:mt-0">
            <div className="card-body">
              <div className="mb-2 flex justify-between">
                <div>Price</div>
                <div>₹{product.price}</div>
              </div>
              <div className="mb-2 flex justify-between">
                <div>Status</div>
                <div>
                  {product.countInStock > 0 ? 'In stock' : 'Unavailable'}
                </div>
              </div>
              {product.countInStock !== 0 && (
                <div className="card-actions justify-center">
                  <AddToCart
                    item={{
                      ...convertDocToObj(product),
                      qty: 0,
                      color: '',
                      size: product.size,
                    }}
                  />
                </div>
              )}
            </div>
          </div>
          <ProductTabs product={product}></ProductTabs>
          <ul className="mt-5">
            <li>
              <p>{product.description}</p>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="product-page-constraint mt-10"
        style={{ backgroundColor: '#f2ede4' }}
      >
        <div className="flex flex-col items-center text-center mb-16 pt-10">
          <span className="text-4xl font-bold text-[#1b2528] mb-6">
            Related products
          </span>
          <p className="text-2xl-regular text-ui-fg-base max-w-lg">
            You might also want to check out these products.
          </p>
        </div>

        <ul className="grid md:grid-cols-1 lg:grid-cols-3 gap-4 justify-items-center m-auto pb-10">
          {relatedProducts.map((product) => (
            <li key={product.slug}>
              <ProductItem
                key={product.slug}
                product={convertDocToObj(product)}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
