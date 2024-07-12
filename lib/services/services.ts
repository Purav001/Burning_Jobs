import { cache } from 'react'
import dbConnect from '../dbConnect'
import servicesModel, { Service } from '@/lib/models/servicesModel'

export const revalidate = 3600

const getLatest = cache(async () => {
    await dbConnect()
    const services = await servicesModel.find({})
    .sort({_id : -1})
    .lean()
    return services as unknown as Service[]
})
const getByid = cache(async (id : Number) => {
    await dbConnect()
    const services = await servicesModel.findOne({ id }).lean()
    return services as unknown as Service[]
})
const getBySlug = cache(async (slug: string) => {
    await dbConnect()
    const services = await servicesModel.findOne({ slug }).lean()
    return services as unknown as Service
})
const getCategories = cache(async () => {
    await dbConnect()
    const categories = await servicesModel.find().distinct('category')
    return categories
  })

const services = {
    getLatest,
    getByid,
    getBySlug,
    getCategories,
}
export default services