import mongoose from 'mongoose'

const photoSchema = new mongoose.Schema(
  {
    id: { type: Number, unique: true },
    name: { type: String, required: true, unique: true },
    image: { type: String },
    height: { type: String },
    width: { type: String },
    public_id: { type: String },
    blurDataUrl: { String },
  },
  {
    timestamps: true,
  }
)

const PhotoModel = mongoose.models.Photo || mongoose.model('Photo', photoSchema)

export default PhotoModel

export type Photo = {
  _id?: string
  id: number
  name: string
  image: string
  height: string
  width: string
  public_id: string
  blurDataUrl: string
}
