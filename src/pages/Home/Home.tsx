import api from 'api'
import React, { useState } from 'react'
import HomePresentation from './HomePresentation/HomePresentation'
import Product from 'interfaces'
import styles from './Home.module.scss'

function Home() {
    const [products, setProducts] = useState<Array<Product> | null>(null)
    const [featuredProduct, setFeaturedProduct] = useState<Product | null>(null)

    React.useEffect(() => {
        async function getProducts() {
            const { data: res } = await api.get('products')
            setProducts(res.data.map((product: { data: [] }) => product.data))
        }
        getProducts()
    }, [])

    React.useEffect(() => {
        if (!products) return
        setFeaturedProduct(
            products.filter((product: Product) => product.featured)[0],
        )
    }, [products])

    return (
        <main className={styles.home}>
            {featuredProduct ? (
                <HomePresentation featuredProduct={featuredProduct} />
            ) : null}
        </main>
    )
}

export default Home
