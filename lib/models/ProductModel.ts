import mongoose from 'mongoose'

export type Image = {
  url: string
  altText: string
}
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    size: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
    isFeatured: { type: Boolean, default: false },
    banner: String,
    images: [
      {
        url: { type: String, required: true },
        altText: { type: String, required: true },
      },
    ],
    source: { type: String, required: true },
    origin_country: { type: String, required: true, default: 'India' },
    making: {
      type: String,
      required: true,
      default: 'Ayurvedic Bilona Method',
    },
  },
  {
    timestamps: true,
  }
)

const ProductModel =
  mongoose.models.Product || mongoose.model('Product', productSchema)

export default ProductModel

export type Product = {
  _id?: string
  name: string
  slug: string
  image: string
  banner?: string
  price: number
  brand: string
  description: string
  category: string
  rating: number
  numReviews: number
  countInStock: number
  colors?: []
  sizes?: [][]
  images: Image[]
  making: string
  origin_country: string
  source: string
  size: string
}
