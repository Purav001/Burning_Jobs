
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
}

const { id } = req.query;

if (!id) {
    return res.status(400).json({ error: 'ID is required' });
}

try {
    const { db } = await connectToDatabase();
    const data = await db.collection('services').findOne({ _id: new ObjectId(id as string) });

    if (!data) {
    return res.status(404).json({ error: 'Data not found' });
    }

    res.status(200).json(data);
} catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
}
}
