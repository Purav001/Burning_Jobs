import mongoose from 'mongoose'

const bannerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const BannerModel =
  mongoose.models.Banner || mongoose.model('Banner', bannerSchema)

export default BannerModel

export type Banner = {
  _id?: string
  slug: string
  name: string
  image: string
  colors?: []
  sizes?: []
}
