import React from 'react'
import ProductInterface from 'interfaces'

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
    const [cartProducts, setCartProducts] = React.useState<ProductInterface[]>(
        [],
    )

    function addProductToCart(product: ProductInterface) {
        setCartProducts([...cartProducts, product])
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
