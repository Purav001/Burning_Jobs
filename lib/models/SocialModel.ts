import mongoose from 'mongoose'

const socialSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const SocialModel =
  mongoose.models.Social || mongoose.model('Social', socialSchema)

export default SocialModel

export type Social = {
  _id?: string
  slug: string
  name: string
  image: string
  colors?: []
  sizes?: []
}
