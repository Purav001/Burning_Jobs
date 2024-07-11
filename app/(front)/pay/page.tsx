'use client'
import React from 'react'
import Pay from '@/components/paymentInterface/page'
import { useSearchParams } from 'next/navigation';

const page = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const numericId = id ? Number(id) : 1;
    return (
        <div>{id ? <Pay id={numericId} /> : <p>Loading...</p>}</div>
    )
}

export default page