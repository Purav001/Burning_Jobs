import ProductItem from '@/components/products/ProductItem'
import productService from '@/lib/services/productService'
import { convertDocToObj } from '@/lib/utils'

export default async function Products() {
  const latestProducts = await productService.getLatest()
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center m-auto mb-10 mt-10">
        {latestProducts.map((product) => (
          <ProductItem key={product.slug} product={convertDocToObj(product)} />
        ))}
      </div>
    </>
  )
}
