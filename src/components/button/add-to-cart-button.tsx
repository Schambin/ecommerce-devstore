'use client'

import { UseCart } from "@/contexts/cart-context"

export interface AddToCartButtonProps {
    productId: number
}

export default function AddToCartButton({ productId }: AddToCartButtonProps) {
    const { addToCart, items } = UseCart()

    function handleAddProductToCart() {
        addToCart(productId)
    }

    return (
        <button 
            type="button"
            onClick={handleAddProductToCart}
            className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
        >
            Adicionar ao carrinho
        </button>
    )
}