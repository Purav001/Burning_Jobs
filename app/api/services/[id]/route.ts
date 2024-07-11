import dbConnect from '@/lib/dbConnect'
import ProductModel from '@/lib/models/servicesModel'
import productService from '@/lib/services/services'
export const GET = async (req: any) => {
  await dbConnect()
  const { id } = req.query;
  const latestProducts = await productService.getByid(id)

  return Response.json(latestProducts)
}
