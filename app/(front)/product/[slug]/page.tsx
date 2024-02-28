import AddToCart from '@/components/products/AddToCart'
import { convertDocToObj } from '@/lib/utils'
import productService from '@/lib/services/productService'
import Image from 'next/image'
import Link from 'next/link'
import { Rating } from '@/components/products/Rating'
import { Gallery } from '@/components/products/gallery'
import ProductTabs from '@/components/products/product-tabs/ProductTabs'
import ProductItem from '@/components/products/ProductItem'

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
      <div className="my-2">
        <Link href="/">back to products</Link>
      </div>
      <div className="grid md:grid-cols-3 md:gap-3">
        <div className="md:col-span-2">
          <Gallery
            images={product.images.map((image: Image) => ({
              src: image.url,
              altText: image.altText,
            }))}
          ></Gallery>
        </div>
        <div>
          <ul className="space-y-4">
            <li>
              <h1 className="text-xl">{product.name}</h1>
            </li>
            <li>
              <Rating
                value={product.rating}
                caption={`${product.numReviews} ratings`}
              />
            </li>
            <li> {product.brand}</li>
            <li>
              <div className="divider"></div>
            </li>
            {/* <li>
              Description: <p>{product.description}</p>
            </li> */}
          </ul>
          <div className="card p-2 bg-[#fbbf24] shadow-md rounded-md w-max">
            <h3 className="text-lg font-semibold mb-2">Size: {product.size}</h3>
          </div>
          <div className="card md:mt-0">
            <div className="card-body">
              <div className="mb-2 flex justify-between">
                <div>Price</div>
                <div>${product.price}</div>
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
                      size: '',
                    }}
                  />
                </div>
              )}
            </div>
          </div>
          <ProductTabs product={product}></ProductTabs>
          <ul>
            <li>
              <p>{product.description}</p>
            </li>
          </ul>
        </div>
        {/* <div>
          <div className="card  bg-base-300 shadow-xl mt-3 md:mt-0">
            <div className="card-body">
              <div className="mb-2 flex justify-between">
                <div>Price</div>
                <div>${product.price}</div>
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
                      size: '',
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div> */}
      </div>
      <div className="product-page-constraint">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-4xl font-semibold text-[#fbbf24] mb-6">
            Related products
          </span>
          <p className="text-2xl-regular text-ui-fg-base max-w-lg">
            You might also want to check out these products.
          </p>
        </div>

        <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8">
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
