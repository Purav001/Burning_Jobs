import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/lib/dbConnect';
// import dbConnect from '@/lib/dbConnect'

export default async (req: NextApiRequest, res: NextApiResponse) => {
const { id } = req.query;

if (!id) {
    return res.status(400).json({ error: 'ID is required' });
}

try {
    const { db } = await connectToDatabase();
    const data = await db.collection('services').findOne({ _id: new Object(id as string) });

    if (!data) {
    return res.status(404).json({ error: 'Data not found' });
    }

    res.status(200).json(data);
} catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
}
};
