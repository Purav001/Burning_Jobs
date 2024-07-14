import Services from '@/components/services/page'
import { convertDocToObj } from '@/lib/utils'
import { Metadata } from 'next'

export const metadata: Metadata = {
title: `Services - Burning Jobs`,
description: `Discover World Class Services: Burning Jobs Collection.`,
}

export default async function Products() {
return (
    <>
    <Services />
    </>
)
}
