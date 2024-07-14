import { create } from 'zustand'
import { round2 } from '../utils'
import { OrderItem, ShippingAddress } from '../models/OrderModel'
import { persist } from 'zustand/middleware'

type Cart = {
  items: OrderItem[]
  shippingAddress: ShippingAddress
  itemsPrice: number
  totalPrice: number
}
const initialState: Cart = {
  items: [],
  shippingAddress: {
    fullName: '',
    contactNumber: '',
    email: '',
  },
  itemsPrice: 0,
  totalPrice: 0,
}

export const cartStore = create<Cart>()(
  persist(() => initialState, {
    name: 'cartStore',
  })
)

export default function useCartService() {
  const {
    items,
    itemsPrice,
    totalPrice,
    shippingAddress,
  } = cartStore()
  return {
    items,
    itemsPrice,
    totalPrice,
    shippingAddress,
    increase: (item: OrderItem) => {
      const exist = items.find((x) => x.slug === item.slug)
      const updatedCartItems = exist
        ? items.map((x) =>
            x.slug === item.slug ? { ...exist, qty: exist.qty + 1 } : x
          )
        : [...items, { ...item, qty: 1 }]
      const { itemsPrice, totalPrice } =
        calcPrice(updatedCartItems)
      cartStore.setState({
        items: updatedCartItems,
        itemsPrice,
        totalPrice,
      })
    },
    decrease: (item: OrderItem) => {
      const exist = items.find((x) => x.slug === item.slug)
      if (!exist) return
      const updatedCartItems =
        exist.qty === 1
          ? items.filter((x: OrderItem) => x.slug !== item.slug)
          : items.map((x) =>
              x.slug === item.slug ? { ...exist, qty: exist.qty - 1 } : x
            )
      const { itemsPrice, totalPrice } =
        calcPrice(updatedCartItems)
      cartStore.setState({
        items: updatedCartItems,
        itemsPrice,
        totalPrice,
      })
    },
    saveShippingAddrress: (shippingAddress: ShippingAddress) => {
      cartStore.setState({
        shippingAddress,
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
      items.reduce((acc, item) => acc + item.price * item.qty, 0)
    ),
    totalPrice = round2(itemsPrice)
  return { itemsPrice, totalPrice }
}
