import React from 'react'
import ProductInterface from 'interfaces'
import useToast from 'hooks/useToast'

interface PropsGlobalContext {
    cartProducts: ProductInterface[]
    addProductToCart: (product: ProductInterface) => void
    clearAllCart: () => void
}

export const GlobalContext = React.createContext<PropsGlobalContext>({
    cartProducts: [],
    addProductToCart: () => null,
    clearAllCart: () => null,
})

interface PropsGlobalStorage {
    children: React.ReactNode
}

export const GlobalStorage = ({ children }: PropsGlobalStorage) => {
    const toast = useToast()
    const [cartProducts, setCartProducts] = React.useState<ProductInterface[]>(
        [],
    )

    function addProductToCart(product: ProductInterface) {
        if (cartProducts.find(({ name }) => name === product.name))
            return toast.error('Product already selected')
        setCartProducts([...cartProducts, product])
        toast.success(`${product.name} has been add to Cart`)
    }

    function clearAllCart() {
        setCartProducts([])
    }

    return (
        <GlobalContext.Provider
            value={{ cartProducts, addProductToCart, clearAllCart }}
        >
            {children}
        </GlobalContext.Provider>
    )
}
