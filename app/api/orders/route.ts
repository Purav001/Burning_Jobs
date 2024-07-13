import { auth } from '@/lib/auth'
import dbConnect from '@/lib/dbConnect'
import OrderModel, { OrderItem } from '@/lib/models/OrderModel'
import servicesModel from '@/lib/models/servicesModel'
import { round2 } from '@/lib/utils'

const calcPrices = (orderItems: OrderItem[]) => {
// Calculate the items price
const price = round2(
    orderItems.reduce((acc, item) => acc + item.price , 0)
)
return { price }
}

export const POST = auth(async (req: any) => {
if (!req.auth) {
    return Response.json(
    { message: 'unauthorized' },
    {
        status: 401,
    }
    )
}
const { user } = req.auth
try {
    const payload = await req.json()
    await dbConnect()
    const dbProductPrices = await servicesModel.find(
    {
        _id: { $in: payload.items.map((x: { _id: string }) => x._id) },
    },
    'price'
    )
    const dbOrderItems = payload.items.map((x: { _id: string }) => ({
    ...x,
    product: x._id,
    price: dbProductPrices.find((x) => x._id === x._id).price,
    _id: undefined,
    }))

    const { price } =
    calcPrices(dbOrderItems)

    const newOrder = new OrderModel({
    items: dbOrderItems,
    price,
    shippingAddress: payload.shippingAddress,
    user: user._id,
    })

    const createdOrder = await newOrder.save()
    return Response.json(
    { message: 'Order has been created', order: createdOrder },
    {
        status: 201,
    }
    )
} catch (err: any) {
    return Response.json(
    { message: err.message },
    {
        status: 500,
    }
    )
}
}) as any
