import { Metadata } from 'next'
import MyOrders from './MyOrders'

export const metadata: Metadata = {
title: `Order History - Burning Jobs`,
description: `Burning Jobs Order History: Track, Reorder & Manage Your Purchases.`,
}
export default function OrderHistory() {
return (
    <>
    <h1 className="text-sm md:text-2xl py-2 text-center font-bold text-[#4F4A45]" style={{paddingTop:'100px'}}>
        Order History
    </h1>
    <MyOrders />
    </>
)
}
