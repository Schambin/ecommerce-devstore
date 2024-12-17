import { z } from "zod"
import data from '../data.json'

export async function GET(_: Request, props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    await new Promise((resolve => setTimeout(resolve, 1000)))

    const slug = z.string().parse(params.slug)
    const product = data.products.find((product: any) => product.slug === slug)

    if (!product) {
        return Response.json({ message: 'Product not found' }, { status: 400 })
    }

    return Response.json(product)
}