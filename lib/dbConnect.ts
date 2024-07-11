import mongoose from 'mongoose'
let client;
let clientPromise: any;
async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!)
  } catch (error) {
    throw new Error('Connection failed!');
    
  }
}

export default dbConnect
export async function connectToDatabase() {
  const client = await clientPromise;
  const db = client.db();
  return { client, db };
}
