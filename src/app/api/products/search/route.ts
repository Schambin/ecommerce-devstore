import { z } from "zod"
import data from '../data.json'
import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
    await new Promise((resolve => setTimeout(resolve, 1000)))

    const { searchParams } = request.nextUrl

    const query = z.string().parse(searchParams.get('q'))
    const products = data.products.filter((product) => {
        return product.title.toLowerCase().includes(query.toLowerCase())
    })

    const productsIsEmpty = products.length === 0

    if (productsIsEmpty) {
        return Response.json({ message: 'Product not found' }, { status: 404 })
    }

    return Response.json(products)
}