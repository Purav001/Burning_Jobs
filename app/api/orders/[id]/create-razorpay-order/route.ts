import Razorpay from 'razorpay'
import { NextRequest, NextResponse, userAgent } from 'next/server'

const razorpay = new Razorpay({
  key_id: process.env.key_id!,
  key_secret: process.env.key_secret,
})

export async function POST(request: NextRequest) {
  const { amount, currency, user, email, id } = (await request.json()) as {
    amount: string
    currency: string
    user: string
    email: string
    id: string
  }

  var options = {
    amount: amount,
    currency: currency,
    receipt: 'rcp1',
    notes: {
      user: user,
      email: email,
      id: id,
    },
  }
  const order = await razorpay.orders.create(options)
  console.log(order)
  return NextResponse.json({ orderId: order.id }, { status: 200 })
}
