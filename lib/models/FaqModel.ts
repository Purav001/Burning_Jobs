import mongoose from 'mongoose'

const faqSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const FaqModel = mongoose.models.Faq || mongoose.model('Faq', faqSchema)

export default FaqModel

export type Faq = {
  _id?: string
  question: string
  answer: string
}
