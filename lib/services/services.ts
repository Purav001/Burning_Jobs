import { cache } from 'react'
import dbConnect from '../dbConnect'
import servicesModel, {Service} from '@/lib/models/servicesModel'

export const revalidate = 3600

const getLatest = cache(async () => {
    await dbConnect()
    const services = await servicesModel.find({})
    .sort({_id : -1})
    .lean()
    return services as unknown as Service[]
})
const getByTitle = cache(async (title : String) => {
    await dbConnect()
    const services = await servicesModel.findOne({ title }).lean()
    return services as unknown as Service[]
})

const services = {
    getLatest,
    getByTitle,
}
export default services