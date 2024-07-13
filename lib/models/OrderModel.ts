import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema(
  {
    ShippingAddress: {
      fullName: { type: String, required: true },
      contactNumber:  { type: String, required: true },
      email: { type: String, required: true },
    },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Services',
          required: true,
        },
        title: { type: String, required: true },
        price: { type: Number, required: true },
      },
    ],
    paymentMethod: { type: String, required: true },
    paymentResult: { id: String, status: String, email_address: String },
    price: { type: Number, required: true },
    isPaid: { type: Boolean, required: true, default: false },
    paidAt: { type: Date },
  },
  {
    timestamps: true,
  }
)
const OrderModel = mongoose.models.Order || mongoose.model('Order', orderSchema)

export default OrderModel

export type Order = {
  _id: string
  user?: { name: string }
  items: [OrderItem]
  ShippingAddress: {
    fullName: string
    contactNumber: string
    email: string
  }
  paymentMethod: string
  paymentResult?: { id: string; status: string; email_address: string }
  price: number
  isPaid: boolean
  paidAt?: string
  createdAt: string
}

export type OrderItem = {
  title: string
  price: number
}

export type ShippingAddress = {
  fullName: string
  contactNumber: string
  email: string
}
