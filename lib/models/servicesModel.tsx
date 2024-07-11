import mongoose from 'mongoose'

export type Service = {
    id: number
    imageSrc: string
    imageSrcSet: string
    title: string
    description: string
    link: string
    price: number
}

const serviceSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        id: {type: Number, require: true},
        imageSrc: {type: String, required: true},
        imageSrcSet: {type: String, required: true},
        description: {type: String, required: true},
        link: {type: String, required: true},
        price: {type: Number, required: true},
    },
    {
        timestamps: true,
    }
)
const servicesModel = 
    mongoose.models.services || mongoose.model('services', serviceSchema)

export default servicesModel


