import { create } from 'zustand'
import { round2 } from '../utils'
import { OrderItem, ShippingAddress } from '../models/OrderModel'
import { persist } from 'zustand/middleware'

type Cart = {
  items: [],
  price: number

  paymentMethod: string
  shippingAddress: ShippingAddress
}
const initialState: Cart = {
  items: [],
  price: 0,
  paymentMethod: '',
  shippingAddress: {
    fullName: '',
    contactNumber: '',
    email: '',
  },
}

export const cartStore = create<Cart>()(
  persist(() => initialState, {
    name: 'cartStore',
  })
)

export default function useCartService() {
  const {
    items: [],
    price,
    paymentMethod,
    shippingAddress,
  } = cartStore()
  return {
    items: [],
    price,
    paymentMethod,
    shippingAddress,
    saveShippingAddrress: (shippingAddress: ShippingAddress) => {
      cartStore.setState({
        shippingAddress,
      })
    },
    savePaymentMethod: (paymentMethod: string) => {
      cartStore.setState({
        paymentMethod,
      })
    },
    clear: () => {
      cartStore.setState({
        items: [],
      })
    },
    init: () => cartStore.setState(initialState),
  }
}

const calcPrice = (items: OrderItem[]) => {
  const itemsPrice = round2(
      items.reduce((acc, item) => acc + item.price, 0)
    ),
    totalPrice = round2(itemsPrice)
  return { itemsPrice, totalPrice }
}
