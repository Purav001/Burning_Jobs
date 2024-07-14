import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        title: { type: String, required: true },
        slug: { type: String, required: true },
        qty: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    shippingAddress: {
      fullName: { type: String, required: true },
      contactNumber: { type: String, required: true },
      email: { type: String, required: true },
    },
    paymentResult: { id: String, status: String, email_address: String },
    itemsPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    isPaid: { type: Boolean, required: true, default: false },
    paidAt: { type: Date },
    deliveredAt: { type: Date },
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
  shippingAddress: {
    fullName: string
    contactNumber: string
    email: string
  }
  paymentResult?: { id: string; status: string; email_address: string }
  itemsPrice: number
  totalPrice: number
  isPaid: boolean
  paidAt?: string
  createdAt: string
}

export type OrderItem = {
  title: string
  slug: string
  qty: number
  price: number
}

export type ShippingAddress = {
  fullName: string
  contactNumber: string
  email: string
}
