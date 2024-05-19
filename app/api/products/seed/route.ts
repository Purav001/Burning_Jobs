import data from '@/lib/data'
import dbConnect from '@/lib/dbConnect'
import BannerModel from '@/lib/models/BannerModel'
import FaqModel from '@/lib/models/FaqModel'
import PhotoModel from '@/lib/models/PhotoModel'
import ProductModel from '@/lib/models/ProductModel'
import SocialModel from '@/lib/models/SocialModel'
import UserModel from '@/lib/models/UserModel'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  const { users, products, socials, banners, faqs, photos } = data
  await dbConnect()
  // await UserModel.deleteMany()
  await UserModel.insertMany(users)

  // await ProductModel.deleteMany()
  await ProductModel.insertMany(products)

  // await SocialModel.deleteMany()
  await SocialModel.insertMany(socials)

  // await BannerModel.deleteMany()
  await BannerModel.insertMany(banners)

  // await FaqModel.deleteMany()
  await FaqModel.insertMany(faqs)

  // await PhotoModel.deleteMany()
  await PhotoModel.insertMany(photos)

  return NextResponse.json({
    message: 'seeded successfully',
    users,
    products,
    socials,
    faqs,
    photos,
  })
}
