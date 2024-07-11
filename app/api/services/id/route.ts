import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import servicesModel from '@/lib/models/servicesModel';

export const GET = async (req: Request, { params }: { params: { id: string } }) => {
await dbConnect();

try {
    const service = await servicesModel.findOne({ id: params.id });

    if (!service) {
    return new NextResponse(JSON.stringify({ message: 'Service not found' }), { status: 404 });
    }

    return NextResponse.json(service);
} catch (error) {
    console.error('Error fetching service data', error);
    return new NextResponse(JSON.stringify({ message: 'Server error' }), { status: 500 });
}
};
