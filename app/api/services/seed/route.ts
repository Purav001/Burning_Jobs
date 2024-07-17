// import data from "@/lib/data";
// import dbConnect from "@/lib/dbConnect";
// import UserModel from '@/lib/models/UserModel'
// import { NextRequest, NextResponse } from "next/server";
// import servicesModel from '@/lib/models/servicesModel'

// export const GET =async (request : NextRequest) => {
//     const { services } = data
//     await dbConnect()
//     // await UserModel.deleteMany()
//     // await UserModel.insertMany(users)

//     await servicesModel.deleteMany()
//     await servicesModel.insertMany(services)

//     return NextResponse.json(
//         {
//             message: "Data seeded successfully",
//             // users,
//             services,
//         }
//     )
// }